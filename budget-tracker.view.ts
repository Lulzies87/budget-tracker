import { activateForm } from "./budget-tracker.controller.js";
import {
  Transaction,
  TransactionType,
  categories,
  transactionTypes,
  transactions,
} from "./budget-tracker.model.js";

export function pageLoad() {
  activateForm();
  displayTransactions();
  displaySummary();
}

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
  if (transaction.type === "Income") {
    return `
        <li>${transaction.date}</li>
        <li>${transaction.type}</li>
        <li style="color: green">${transaction.amount}</li>
        <li>${transaction.category}</li>
        `;
  } else {
    return `
        <li>${transaction.date}</li>
        <li>${transaction.type}</li>
        <li style="color: red">(${transaction.amount})</li>
        <li>${transaction.category}</li>
        `;
  }
}

function displaySummary() {
  const incomeSum = document.getElementById("totalIncome") as HTMLSpanElement;
  incomeSum.textContent = `${calculateSum("Income")}`;

  const expenseSum = document.getElementById("totalExpense") as HTMLSpanElement;
  expenseSum.textContent = `-${calculateSum("Expense")}`;

  const balance = document.getElementById("balance") as HTMLSpanElement;
  balance.textContent = `${calculateSum("Income") - calculateSum("Expense")}`;

  if (calculateSum("Income") - calculateSum("Expense") > 0) {
    balance.style.color = "green";
  } else if (calculateSum("Income") - calculateSum("Expense") < 0) {
    balance.style.color = "red";
  } else {
    balance.style.color = "black";
  }
}

function calculateSum(type: TransactionType) {
  let total = 0;

  transactions.forEach((transation) => {
    if (transation.type === type) {
      total += transation.amount;
    }
  });

  return total;
}