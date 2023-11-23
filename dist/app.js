const transactionTypes = ["Income", "Expense"];
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
];
let transactions = [];
const dateInput = document.getElementById("date");
dateInput.value = new Date().toISOString().split("T")[0];
const typeInput = document.getElementById("type");
typeInput.innerHTML = `${transactionTypes.map(toOption).join("\n")}`;
const categoryInput = document.getElementById("category");
categoryInput.innerHTML = `${categories.map(toOption).join("\n")}`;
function toOption(element) {
    return `<option value="${element}">${element}</option>`;
}
document.forms.namedItem("log-transaction")?.addEventListener("submit", (e) => {
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
export function parseData(input, key) {
    if (input === null) {
        throw new Error(`${key} can't be null!`);
    }
    else {
        return input;
    }
}
