/**
 * Defines the configuration for the application.
 */
export interface AppConfig {
    /**
     * Defines the configuration for the API.
     */
    api: {
        /**
         * Defines the base URL for the API.
         */
        baseUrl: string
    },
    /**
     * Defines the configuration for observability.
     */
    observability: {
        /**
         * Defines the connection string for Application Insights.
         */
        connectionString: string
    }
}

/**
 * The configuration object for the application.
 */
const config: AppConfig = {
    api: {
        baseUrl: window.ENV_CONFIG.REACT_APP_API_BASE_URL || 'http://localhost:3100'
    },
    observability: {
        connectionString: window.ENV_CONFIG.REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING || ''
    }
}

export default config;