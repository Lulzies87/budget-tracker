import { Category, transactions } from "./budget-tracker.model.js";
import { loadFormFields } from "./budget-tracker.view.js";

export function activateForm() {
  loadFormFields();

  document.forms
    .namedItem("log-transaction")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);

      const transactionObject = {
        type: parseData(formData.get("typeInput"), "type"),
        amount: parseData(Number(formData.get("amountInput")), "amount"),
        category: parseData(
          formData.get("categoryInput") as Category,
          "category"
        ),
        date: parseData(formData.get("dateInput") as string, "date"),
      };

      transactions.push(transactionObject);
      console.log(transactions);
    });
}

function parseData(input: any | null, key: string) {
  if (input === null) {
    throw new Error(`${key} can't be null!`);
  } else {
    return input;
  }
}
