import { transactions } from "./budget-tracker.model.js";
import { displayTransactions, loadFormFields } from "./budget-tracker.view.js";
export function activateForm() {
    loadFormFields();
    document.forms
        .namedItem("log-transaction")
        ?.addEventListener("submit", (e) => {
        const formData = new FormData(e.target);
        const transactionObject = {
            type: parseData(formData.get("typeInput"), "type"),
            amount: parseAmount(Number(formData.get("amountInput")), "amount"),
            category: parseData(formData.get("categoryInput"), "category"),
            date: parseData(formData.get("dateInput"), "date"),
        };
        logTransaction(transactionObject);
        displayTransactions();
    });
}
function parseData(input, key) {
    if (input === null) {
        throw new Error(`${key} can't be null!`);
    }
    else {
        return input;
    }
}
function parseAmount(input, key) {
    if (isNaN(input)) {
        throw new Error(`${key} must be a number!`);
    }
    else if (input <= 0) {
        throw new Error(`${key} must be a positive number!`);
    }
    return input;
}
function logTransaction(transaction) {
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
