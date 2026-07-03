function convertTemperature() {

    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {

        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;

    }

    else if (unit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;

    }

    else if (unit === "kelvin") {

        if (temperature < 0) {
            alert("Kelvin cannot be less than 0.");
            return;
        }

        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = temperature;

    }

    document.getElementById("celsius").innerHTML =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerHTML =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").innerHTML =
        kelvin.toFixed(2) + " K";

}