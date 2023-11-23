const transactionTypes = ["Income", "Expense"] as const;
const categories = [
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
type Category = (typeof categories)[number];
interface Transaction {
  type: TransactionType;
  amount: Number;
  category: Category;
  date: Date;
}

let transactions: Transaction[] = [];

const dateInput = document.getElementById("date") as HTMLInputElement;
dateInput.value = new Date().toISOString().split("T")[0];

const typeInput = document.getElementById("type") as HTMLSelectElement;
typeInput.innerHTML = `${transactionTypes.map(toOption).join("\n")}`;

const categoryInput = document.getElementById("category") as HTMLSelectElement;
categoryInput.innerHTML = `${categories.map(toOption).join("\n")}`;

function toOption(element: string) {
  return `<option value="${element}">${element}</option>`;
}

document.forms.namedItem("log-transaction")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  const transactionObject = {
    type: parseData(formData.get("typeInput"), "type"),
    amount: parseData(Number(formData.get("amountInput")), "amount"),
    category: parseData(formData.get("categoryInput") as Category, "category"),
    date: parseData(formData.get("dateInput") as string, "date"),
  };

  transactions.push(transactionObject);
  console.log(transactions);
});

export function parseData(input: any | null, key: string) {
  if (input === null) {
    throw new Error(`${key} can't be null!`);
  } else {
    return input;
  }
}
