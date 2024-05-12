const axios = require("axios");

exports.getTransactions = async (address) => {
  const apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=latest&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`;
  const response = await axios.get(apiUrl);
  return response;
};
