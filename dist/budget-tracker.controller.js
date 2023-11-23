import { transactions } from "./budget-tracker.model.js";
import { loadFormFields } from "./budget-tracker.view.js";
export function activateForm() {
    loadFormFields();
    document.forms
        .namedItem("log-transaction")
        ?.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const transactionObject = {
            type: parseData(formData.get("typeInput"), "type"),
            amount: parseData(Number(formData.get("amountInput")), "amount"),
            category: parseData(formData.get("categoryInput"), "category"),
            date: parseData(formData.get("dateInput"), "date"),
        };
        transactions.push(transactionObject);
        console.log(transactions);
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
