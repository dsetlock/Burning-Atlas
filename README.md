 
# Burning-Atlas

The purpose of this repository is to provide a starter project to create a web application using a React.js front end, Node.js With Typescript Express REST API backend and a MongoDB API interface to a Azure Cosmos DB.

## Setup

First time using the repository, navigate to Settings and ensure the 'Template Repository' option is selected. 

Within the repository, select 'Use this template' to generate a new repository based off the initial starter project with base files and packages.

### Application Architecture 

This application can utilizes the following Azure resources:

- [**Azure Kubernetes Service (AKS)**](https://docs.microsoft.com/azure/aks) to host the Web frontend and API backend
- [**Azure Cosmos DB API for MongoDB**](https://docs.microsoft.com/azure/cosmos-db/mongodb/mongodb-introduction) for storage
- [**Azure Monitor**](https://docs.microsoft.com/azure/azure-monitor/) for monitoring and logging
- [**Azure Key Vault**](https://docs.microsoft.com/azure/key-vault/) for securing secrets



### Prerequisites


#### React.js Prerequisites

Create a `.env` file within the base of the `web` folder with the following configuration:

- `REACT_APP_API_BASE_URL` - Base URL for all api requests, (ex: `http://localhost:3100`)

> Note: The URL must include the schema, either `http://` or `https://`.

- `REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING` - Azure Application Insights connection string

If you do not already have a `.env` file you can create one by running `touch .env` in the terminal. Remember to add `.env` to your `.gitignore`

#### Node Prerequisites 

- Node (16.20.0)
- NPM (8.1.0)

### Local Environment

For the React.js Website you can run 

### `npm ci` 

to install the local prerequisites.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

For the Node setup, create a `.env` with the following configuration:

- `AZURE_COSMOS_CONNECTION_STRING` - Cosmos DB connection string (Mongo DB also supported)
- `AZURE_COSMOS_DATABASE_NAME` - Cosmos DB database name (Will automatically be created if it doesn't exist) (default: Todo)
- `APPLICATIONINSIGHTS_CONNECTION_STRING` - Azure Application Insights connection string
- `APPLICATIONINSIGHTS_ROLE_NAME` - Azure Application Insights Role name (default: API)

### Install Dependencies

For Node dependencies, navigate to the `node` directory and run `npm ci` to install local dependencies

### Build & Compile

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

To build and compile the Node project, within the `node` directory 

Run `npm run build` to build and compile the Typescript code into `./dist` folder


### Run Application

Run `npm start` to start the local development server

Launch browser @ `http://localhost:3100`.
(If using the container, you must map the port on run accordingly)