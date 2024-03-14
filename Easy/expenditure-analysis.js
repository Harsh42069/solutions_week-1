/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

/*
function calculateTotalSpentByCategory(transactions) {
  return [];
}
*/

function calculateTotalSpentByCategory(transactions) {
    // Use reduce to accumulate total spent for each category
      if (!acc[category]) {
        const totalSpentByCategory = transactions.reduce((acc, transaction) => {
      const { category, price } = transaction;
      // If the category doesn't exist in the accumulator yet, initialize it with the price
      if (!acc[category]) {
        acc[category] = price;
      } else {
        // If the category already exists, add the price to its total spent
        acc[category] += price;
      }
      
      return acc;
    }, {});
  
    // Convert the accumulated totals into an array of objects
    const result = Object.entries(totalSpentByCategory).map(([category, totalSpent]) => {
      return { category, totalSpent };
    });
  
    return result;
  }