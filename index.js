$(document).ready(function () {
    var inputs = [""];
    var string;
    var operators = ["+", "-", "*", "/"];
    var dot = ["."];
    var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    function getValue(input) {
        if (dot.includes(inputs[inputs.length - 1]) === true && input === ".") {
            console.log("Error - Duplicate '.'");
        }
        else if (inputs.length === 1 || inputs.length === 0) {
            if(operators.includes(input) === false){
            inputs.push(input);
            }
        }
        else if (operators.includes(inputs[inputs.length - 1]) === false) {
            inputs.push(input);
        }
        else if(operators.includes(inputs[inputs.length -1])=== true && nums.includes(input) === true){
            inputs.push(input);
        }
        else if (nums.includes(Number(input))) {
            inputs.push(input);
        }
        updateOutput();
    }
    function updateOutput(input) {
        string = inputs.join("");
        $("#output").html(string);
    }
    function getTotal(input) {
        string = inputs.join("");
        $("#output").html(eval(string));
    }
    $("a").on("click", function () {
        if (this.id === "ac") {
            inputs = [""];
            updateOutput();
        }
        else if (this.id === "ce") {
            inputs.pop();
            updateOutput();
        }
        else if (this.id === "=") {
            getTotal();
        }
        else {
            if (inputs[inputs.length - 1].indexOf("+", "-", "*", "/") === -1) {
                getValue(this.id);
            }
            else {
                getValue(this.id);
            }
        }
    })
})