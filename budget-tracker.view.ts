import { Transaction, categories, transactionTypes, transactions } from "./budget-tracker.model.js";

export function loadFormFields() {
  const dateInput = document.getElementById("date") as HTMLInputElement;
  dateInput.value = new Date().toISOString().split("T")[0];

  const typeInput = document.getElementById("type") as HTMLSelectElement;
  typeInput.innerHTML = `${transactionTypes.map(toOption).join("\n")}`;

  const categoryInput = document.getElementById(
    "category"
  ) as HTMLSelectElement;
  categoryInput.innerHTML = `${categories.map(toOption).join("\n")}`;

  function toOption(element: string) {
    return `<option value="${element}">${element}</option>`;
  }
}

export function displayTransactions() {
    const container = document.getElementById("transactionHistory");
    container!.innerHTML = `${transactions.map(showTransaction).join("\n")}`;
}

function showTransaction(transaction: Transaction) {
    return `
    <li>${transaction.date}</li>
    <li>${transaction.type}</li>
    <li>${transaction.amount}</li>
    <li>${transaction.category}</li>
    `;
}