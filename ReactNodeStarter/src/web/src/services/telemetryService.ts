import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { ApplicationInsights, Snippet, ITelemetryItem } from "@microsoft/applicationinsights-web";
import { DistributedTracingModes } from "@microsoft/applicationinsights-common";
import { createBrowserHistory } from 'history'
import config from "../config";

/**
 * ReactPlugin instance for Application Insights
 */
const plugin = new ReactPlugin();

/**
 * Application Insights instance
 */
let applicationInsights: ApplicationInsights;

export const reactPlugin = plugin;

/**
 * Returns the Application Insights instance
 * @returns Application Insights instance
 */
export const getApplicationInsights = (): ApplicationInsights => {
    const browserHistory = createBrowserHistory({ window: window });
    if (applicationInsights) {
        return applicationInsights;
    }

    const ApplicationInsightsConfig: Snippet = {
        config: {
            connectionString: config.observability.connectionString,
            enableCorsCorrelation: true,
            distributedTracingMode: DistributedTracingModes.W3C, 
            extensions: [plugin],
            extensionConfig: {
                [plugin.identifier]: { history: browserHistory }
            }
        }
    }

    applicationInsights = new ApplicationInsights(ApplicationInsightsConfig);
    try {
        applicationInsights.loadAppInsights();
        applicationInsights.addTelemetryInitializer((telemetry: ITelemetryItem) => {
            if (!telemetry) {
                return;
            }
            if (telemetry.tags) {
                telemetry.tags['ai.cloud.role'] = "webui";
            }
        });
    } catch(err) {
        // TODO - proper logging for web
        console.error("ApplicationInsights setup failed, ensure environment variable 'REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING' has been set.", err);
    }

    return applicationInsights;
}

/**
 * Tracks an event in Application Insights
 * @param eventName - The name of the event to track
 * @param properties - Optional properties to include with the event
 */
export const trackEvent = (eventName: string, properties?: { [key: string]: unknown }): void => {
    if (!applicationInsights) {
        return;
    }

    applicationInsights.trackEvent({
        name: eventName,
        properties: properties
    });
}
