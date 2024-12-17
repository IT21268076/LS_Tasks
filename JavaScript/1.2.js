/*
* Order Sales by Total sales return ordered sales
* param @sales
*/
function orderSalesByTotal(sales) {
    // Append total sales to array
    const salesWithTotal = sales.map(sale => ({
        ...sale,
        Total: sale.amount * sale.quantity
    }));

    // Sorting ascending order
    return salesWithTotal.sort((a, b) => a.Total - b.Total);
}

const sales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 5 },
    { amount: 2000, quantity: 15 }
];

const orderedSales = orderSalesByTotal(sales);

console.log("Original Sales:", sales);
console.log("Ordered Sales:", orderedSales);
