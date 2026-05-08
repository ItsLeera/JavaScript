const expressionDisplay = document.querySelector(".expression");
const resultDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

let expression = "";

// Function to evaluate full expression
function evaluateExpression(expr) {
    try {
        // Replace symbols with JS operators
        let formatted = expr
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        return eval(formatted); // handles full math
    } catch {
        return "Error";
    }
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // CLEAR
        if (button.classList.contains("clear")) {
            expression = "";
            expressionDisplay.textContent = "";
            resultDisplay.textContent = "";
            return;
        }

        // DELETE
        if (value === "⌫") {
            expression = expression.slice(0, -1);
            expressionDisplay.textContent = expression;
            return;
        }

        // EQUALS
        if (value === "=") {
            let result = evaluateExpression(expression);
            resultDisplay.textContent = result;
            return;
        }

        // NORMAL INPUT
        expression += value;
        expressionDisplay.textContent = expression;
    });
});


