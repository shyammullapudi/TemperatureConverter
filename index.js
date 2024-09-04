
document.getElementById('convertButton').addEventListener('click', function() {
    let temperature = document.getElementById('temperatureInput').value;
    let unit = document.getElementById('unitSelect').value;

    if (isNaN(temperature)) {
        document.getElementById('resultDisplay').innerText = "Please enter a valid number!";
        return;
    }

    temperature = parseFloat(temperature);
    let convertedTemp;
    let resultText;

    if (unit === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        resultText =` ${temperature} °C is ${convertedTemp.toFixed(2)} °F`;
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) * 5/9;
        resultText = `${temperature} °F is ${convertedTemp.toFixed(2)} °C`;
    }

    document.getElementById('resultDisplay').innerText = resultText;
});