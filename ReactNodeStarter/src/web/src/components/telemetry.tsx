import React, { FC, ReactElement, useEffect, ComponentType, ComponentClass, PropsWithChildren } from 'react';
import { TelemetryProvider } from './telemetryContext';
import { reactPlugin, getApplicationInsights } from '../services/telemetryService';
import { withAITracking } from '@microsoft/applicationinsights-react-js';
/**
 * Provides a context for telemetry tracking using Application Insights.
 * @param props The component props.
 * @returns The rendered Telemetry component.
 */
type TelemetryProps = PropsWithChildren<unknown>;

const Telemetry: FC<TelemetryProps> = (props: TelemetryProps): ReactElement => {

    useEffect(() => {
        getApplicationInsights();
    }, []);

    return (
        <TelemetryProvider value={reactPlugin}>
            {props.children}
        </TelemetryProvider>
    );
}

export default Telemetry;
export const withApplicationInsights = (component: ComponentType<unknown>, componentName: string): ComponentClass<ComponentType<unknown>, unknown> => withAITracking<typeof component>(reactPlugin, component, componentName);
