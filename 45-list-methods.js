// Exercise: Transaction analysis
/* Imagine you have a list of financial transactions and you want to perform various 
data processing operations. Use the following instructions as a guide to complete the 
exercise:
1. Calculate total balance: Use the reduce method to calculate and display the total
balance of all transactions.

2. Find the largest transaction (Income or Expense): Utilize the reduce method to find
the transaction with the largest amount (either income or expense) and display it in the
console.

3. Filter Purchase Transactions: Use the filter method to obtain and display in the
console on ly the purchase transactions (with negative amounts).

4. Find Transaction By Description: Use the find method to search and display in the 
console a specific transaction by its description.

5. Find the Index of a Transaction by Amount: Employ the findIndex method to find and display in the console 
the index of a specific transaction by its amount.

6. Update Transaction Descriptions: Use the forEach method to update the description of transactions. Add
the prefix "Expense" to transactions with negative amounts and "Income" to transactions with positive
amounts Display the updated transactions in the console. Remember to adapt and combine these operations
as needed.

*/

const transactions = [
    {id: 1, description: "Grocery shopping", amount: -50},
    {id: 2, description: "Salary Deposit", amount: 2000},
    {id: 3, description: "Utility Bill Payment", amount: -100},
    {id: 4, description: "Online Purchase", amount: -30},
]

// 1. Calculate total balance

const totalBalance = transactions.reduce((acc,transaction) => acc + transaction.amount,0)
console.log('total balance: ', totalBalance)

// 2. Find the largest transaction (Income or Expense)

const largestTransaction = transactions.reduce((maxTransaction,transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction: maxTransaction
},transactions[0])

console.log('largest transaction ', largestTransaction)

// 3. Filter Purchase Transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)

console.log('Purchase Transactions: ', purchaseTransactions)

// 4. Find Transaction By Description

const specificTransaction = transactions.find(transaction => transaction.description === "Online Purchase")
console.log("specific Transaction: ", specificTransaction)

// 5. Find the Index of a Transaction by Amount:

const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30)
console.log('index transaction with amount -30: ', indexTransactionWithAmount)

// 6. Update Transaction Descriptions:

transactions.forEach(transaction => {
    if (transaction.amount < 0){
        transaction.description = `Expense: ${transaction.description}`
    }else{
        transaction.description = `Income: ${transaction.description}`
    }
})

console.log('Updated Transactions: ', transactions)