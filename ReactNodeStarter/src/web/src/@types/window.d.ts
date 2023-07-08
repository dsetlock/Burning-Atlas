export { };

declare global {
    interface Window {
        ENV_CONFIG: {
            REACT_APP_API_BASE_URL: string;
            REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING: string;
        }
    }
}
/**
 * This file declares a global interface for the Window object, adding a custom property to it.
 * The custom property is an object called ENV_CONFIG, which contains two properties:
 * - REACT_APP_API_BASE_URL: a string representing the base URL for the API.
 * - REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING: a string representing the connection string for Application Insights.
 */
