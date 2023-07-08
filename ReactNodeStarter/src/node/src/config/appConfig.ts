export interface ObservabilityConfig {
    connectionString: string
    roleName: string
}

export interface DatabaseConfig {
    connectionString: string
    databaseName: string
}

export interface AppConfig {
    observability: ObservabilityConfig
    database: DatabaseConfig
}
/**
 * Defines the configuration for the application, including observability and database settings.
 */
