import { activateForm } from "./budget-tracker.controller.js";
import { categories, transactionTypes, transactions, } from "./budget-tracker.model.js";
export function pageLoad() {
    activateForm();
    displayTransactions();
    displaySummary();
}
export function loadFormFields() {
    const dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().split("T")[0];
    const typeInput = document.getElementById("type");
    typeInput.innerHTML = `${transactionTypes.map(toOption).join("\n")}`;
    const categoryInput = document.getElementById("category");
    categoryInput.innerHTML = `${categories.map(toOption).join("\n")}`;
    function toOption(element) {
        return `<option value="${element}">${element}</option>`;
    }
}
export function displayTransactions() {
    const container = document.getElementById("transactionHistory");
    container.innerHTML = `${transactions.map(showTransaction).join("\n")}`;
}
function showTransaction(transaction) {
    return `
    <li>${transaction.date}</li>
    <li>${transaction.type}</li>
    <li>${transaction.amount}</li>
    <li>${transaction.category}</li>
    `;
}
function displaySummary() {
    const incomeSum = document.getElementById("totalIncome");
    incomeSum.textContent = `${calculateSum("Income")}`;
    const expenseSum = document.getElementById("totalExpense");
    expenseSum.textContent = `-${calculateSum("Expense")}`;
    const balance = document.getElementById("balance");
    balance.textContent = `${calculateSum("Income") - calculateSum("Expense")}`;
    if (calculateSum("Income") - calculateSum("Expense") > 0) {
        balance.style.color = "green";
    }
    else if (calculateSum("Income") - calculateSum("Expense") < 0) {
        balance.style.color = "red";
    }
    else {
        balance.style.color = "black";
    }
}
function calculateSum(type) {
    let total = 0;
    transactions.forEach((transation) => {
        if (transation.type === type) {
            total += transation.amount;
        }
    });
    return total;
}
