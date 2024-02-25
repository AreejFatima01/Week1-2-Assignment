// Write a program that calculates the result of a mathematical expression.{(10+5)*3-2)/4%3) -7)}
function evaluateExpression(expression: string): number {
    try {
        return eval(expression);
    } catch (error) {
        console.error("Error evaluating expression:", error);
        return NaN;
    }
}

const inputExpression = "((10 + 5) * 3 - 2) / 4 % 3 - 7";
const result = evaluateExpression(inputExpression);

if (!isNaN(result)) {
    console.log(`The result of the expression is: ${result}`);
} else {
    console.log("Invalid expression. Please check your input.");
}
