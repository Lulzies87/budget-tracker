export const transactionTypes = ["Income", "Expense"];
export const categories = [
    "Housing",
    "Transportation",
    "Food",
    "Healthcare",
    "Entertainment",
    "Utilities",
    "Personal Care",
    "Education",
    "Clothing",
    "Insurance",
    "Travel",
    "Miscellaneous",
    "Salary",
];
export let transactions = [];
const retrieveTransactions = localStorage.getItem("transactions");
if (retrieveTransactions) {
    transactions = JSON.parse(retrieveTransactions);
}
