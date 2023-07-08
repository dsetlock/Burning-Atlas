import { createApp } from "./app";
import { logger } from "./config/observability";
/**
 * This file serves as the entry point for the Node.js server.
 * It imports the createApp function from the app module and starts the server on a specified port.
 */
const main = async () => {
    const app = await createApp();
    const port = process.env.FUNCTIONS_CUSTOMHANDLER_PORT || process.env.PORT || 3100;

    app.listen(port, () => {
        logger.info(`Started listening on port ${port}`);
    });
};

main();