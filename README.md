
### `src/config`
Contains the database configuration file (`database.js`) for establishing a connection with MongoDB.

### `src/controllers`
Holds the controller logic for handling transaction and user balance requests.

### `src/models`
Defines the Mongoose schemas and models for transactions, addresses, and Ethereum prices.

### `src/routes`
Defines the API routes for transactions and user balance endpoints.

### `src/services`
Includes service files for interacting with external APIs like Etherscan and CoinGecko.

### `src/utils`
Contains utility files, such as `priceUpdater.js`, which handles the periodic update of Ethereum prices.

### `src/index.js`
The main entry point of the application, responsible for setting up the Express server, connecting to the database, and registering the routes.

### `.env`
Environment variables file for storing sensitive information like the Etherscan API key and MongoDB connection URL.

### `package.json`
Manages project dependencies and scripts.

## Features

1. Fetches and stores Ethereum transactions for a given address using the Etherscan API.
2. Calculates the user's balance based on the fetched transactions.
3. Retrieves the current price of Ether from the CoinGecko API and updates it in the database every 10 minutes.
4. Provides a `GET` API endpoint to retrieve the user's balance and the current Ether price.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Axios (for making HTTP requests)
- Etherscan API
- CoinGecko API

## Getting Started

1. Clone the repository: `git clone https://github.com/ShubhzDev/KoinX.git`
2. Install dependencies: `npm install`
3. Set up the environment variables in the `.env` file.
4. Start the server: `node app.js`
5. The server will start running on `http://localhost:3000`.

## API Endpoints

- `GET /api/transactions/:address`: Fetches and stores transactions for the given Ethereum address.
- `GET /api/balance/:address`: Retrieves the user's balance and the current Ether price.
