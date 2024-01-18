/* function fahrenheit_to_celsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const min_temp_f = 73;
const max_temp_f = 77;
const optimal_temp_c = 75;

while (true) {
    const temp_f = parseFloat(prompt("Enter the temperature in Fahrenheit: "));
    const temp_c = fahrenheit_to_celsius(temp_f);
    if (temp_c < optimal_temp_c) {
        console.log(`The temperature is too cold (${temp_c.toFixed(2)}°C). Turn up the heat a bit.`);
    } else if (temp_c > optimal_temp_c) {
        console.log(`The temperature is too hot (${temp_c.toFixed(2)}°C). Turn down the heat a bit.`);
    } else {
        console.log(`The temperature is perfect (${temp_c.toFixed(2)}°C). Enjoy your sauna!`);
        break;
    }
}
 */
function fahrenheit_to_celsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const min_temp_f = 73;
const max_temp_f = 77;
const optimal_temp_c = 75;

let temp_f;
let temp_c;

const min_temp_c = fahrenheit_to_celsius(min_temp_f);
const max_temp_c = fahrenheit_to_celsius(max_temp_f);

do {
    temp_f = parseFloat(prompt("Enter the temperature in Fahrenheit: "));
    temp_c = fahrenheit_to_celsius(temp_f);
    if (temp_c < optimal_temp_c) {
        console.log(`The temperature is too cold (${temp_c.toFixed(2)}°C). Turn up the heat a bit.`);
    } else if (temp_c > optimal_temp_c) {
        console.log(`The temperature is too hot (${temp_c.toFixed(2)}°C). Turn down the heat a bit.`);
    }
} while (temp_c < min_temp_c || temp_c > max_temp_c);

console.log(`The temperature is perfect (${temp_c.toFixed(2)}°C). Enjoy your sauna!`);
