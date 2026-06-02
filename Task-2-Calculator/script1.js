const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        const expression = display.value;

        if (expression.trim() === "") {
            return;
        }

        const result = eval(expression);

        const item = document.createElement("li");
        item.textContent = `${expression} = ${result}`;

        historyList.prepend(item);

        display.value = result;

    } catch (error) {

        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1000);

    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("keydown", (e) => {

    if (
        !isNaN(e.key) ||
        ["+", "-", "*", "/", ".", "%"].includes(e.key)
    ) {
        appendValue(e.key);
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") {
        e.preventDefault();
        deleteLast();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }

});
