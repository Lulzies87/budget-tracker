export const transactionTypes = ["Income", "Expense"] as const;
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
] as const;

export type TransactionType = (typeof transactionTypes)[number];
export type Category = (typeof categories)[number];
export interface Transaction {
  type: TransactionType;
  amount: number;
  category: Category;
  date: Date;
}

export let transactions: Transaction[] = [];
const retrieveTransactions = localStorage.getItem("transactions");
if (retrieveTransactions) {
  transactions = JSON.parse(retrieveTransactions);
}