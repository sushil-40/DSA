var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > 0) {
      maxProfit = prices[i] - min;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
};
