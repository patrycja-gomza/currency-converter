let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency")
let amountElement = document.querySelector(".js-amount")
let resultElement = document.querySelector(".js-result")

let rateCHF = 4.63;
let rateEUR = 4.66;
let rateUSD = 4.15;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;

    let result = resultElement.value;

    switch (currency) {
        case "CHF":
            result = amount * rateCHF;
            break;
        case "EUR":
            result = amount * rateEUR;
            break;
        case "USD":
            result = amount * rateUSD;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} PLN`;
});
