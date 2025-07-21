// You are given an array where prices[i] is the price of a given stock on the ith day.
// you want to maximize your profit by choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function findBestTime(prices) {
  let maximumProfit = prices[1] - prices[0];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maximumProfit) {
        maximumProfit = prices[j] - prices[i];
      }
    }
  }
  return maximumProfit < 1 ? 0 : maximumProfit;
}
console.log(findBestTime([3, 8, 2, 5, 1, 9]));
