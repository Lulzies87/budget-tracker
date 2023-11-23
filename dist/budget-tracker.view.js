import { categories, transactionTypes } from "./budget-tracker.model.js";
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