const axios = require("axios");

// const baseUrl = "https://api.etherscan.io/api";
const baseUrl = "https://api-sepolia.etherscan.io/api";

exports.getTransactions = async (address) => {
  const apiUrl = `${baseUrl}?module=account&action=txlist&address=${address}&startblock=0&endblock=latest&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`;
  const response = await axios.get(apiUrl);
  return response;
};
