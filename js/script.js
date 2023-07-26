{
    const calculateResult = (amount, currency) => {
        const rateCHF = 4.63;
        const rateEUR = 4.66;
        const rateUSD = 4.15;

        switch (currency) {
            case "CHF":
                return amount * rateCHF;

            case "EUR":
                return amount * rateEUR;

            case "USD":
                return amount * rateUSD;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency")
        const amountElement = document.querySelector(".js-amount")

        const currency = currencyElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, currency, result);
    };

    const updateResultText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result")
        resultElement.innerText = `${result.toFixed(2)} PLN`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
