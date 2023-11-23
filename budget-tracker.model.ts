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
] as const;

type TransactionType = (typeof transactionTypes)[number];
export type Category = (typeof categories)[number];
interface Transaction {
  type: TransactionType;
  amount: Number;
  category: Category;
  date: Date;
}

export let transactions: Transaction[] = [];