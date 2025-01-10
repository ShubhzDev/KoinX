## Features
1. Retrieves the current stats of Ethereum,Matic and Bitcoin from the CoinGecko API and updates it in the database every 2 hours.
2. Provides a `GET` API endpoint which fetches and returns current stats(usd,usd_market_cap and usd_24h_change) of given Coin.
3. Provides a `GET` API endpoint to retrieve the stats and deviation for last 100 record of given coin.

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
3. Set up the environment variables in the `.env.example` file.
4. Start the server: `npm start`
5. The server will start running on `http://localhost:8080`.

## API Endpoints

- `GET /api/stats/coin`: Fetches and returns current stats(usd,usd_market_cap and usd_24h_change) of given Coin.
- `GET /api/deviation/coin`: Calculates and returns deviation of given Coin.
