
document.getElementById("convert-btn").addEventListener("click", function(event) {
    event.preventDefault(); 

    let input_value = document.getElementById("input-value").value;
    input_value = parseFloat(input_value);

    let conversionSelect = document.getElementById("conversion-type");
    let conversionType = conversionSelect.options[conversionSelect.selectedIndex].value;

    let result;

    switch (conversionType) {

        case "in-to-cm":
            result = input_value * 2.54;
            document.getElementById("output").innerHTML =
                `${input_value} inches is ${result.toFixed(2)} centimeters`;
            break;

        case "ft-to-cm":
            result = input_value * 30.48;
            document.getElementById("output").innerHTML =
                `${input_value} feet is ${result.toFixed(2)} centimeters`;
            break;

        case "yd-to-m":
            result = input_value * 0.91;
            document.getElementById("output").innerHTML =
                `${input_value} yards is ${result.toFixed(2)} meters`;
            break;

        case "mi-to-km":
            result = input_value * 1.61;
            document.getElementById("output").innerHTML =
                `${input_value} miles is ${result.toFixed(2)} kilometers`;
            break;

        case "cm-to-in":
            result = input_value * 0.39;
            document.getElementById("output").innerHTML =
                `${input_value} centimeters is ${result.toFixed(2)} inches`;
            break;

        case "cm-to-ft":
            result = input_value * 0.0328;
            document.getElementById("output").innerHTML =
                `${input_value} centimeters is ${result.toFixed(2)} feet`;
            break;

        case "m-to-yd":
            result = input_value * 1.09;
            document.getElementById("output").innerHTML =
                `${input_value} meters is ${result.toFixed(2)} yards`;
            break;

        case "km-to-mi":
            result = input_value * 0.62;
            document.getElementById("output").innerHTML =
                `${input_value} kilometers is ${result.toFixed(2)} miles`;
            break;

        default:
            document.getElementById("output").innerHTML =
                "Invalid selection. Please try again.";
    }
});
