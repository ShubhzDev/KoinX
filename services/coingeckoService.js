const axios = require("axios");

exports.getEthereumPrice = async () => {
  const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr";
  const response = await axios.get(apiUrl);
  const price = response.data.ethereum["inr"];
  return price;
};
