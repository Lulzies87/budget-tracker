import { categories, transactionTypes } from "./budget-tracker.model.js";

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
