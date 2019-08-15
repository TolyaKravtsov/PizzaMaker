'use strict';
// Client Object creating <-

const getRandomClientsAmount = (min = 20, max = 20) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getPizzaArray = () => {
    let shuffledPizzaElements = shuffleArray(pizzaElements);

    return shuffledPizzaElements.slice(0, getRandomNumber(5, 10))
};

const setClientOrderTime = (clientOrder) => {
    let clientOrderTime = 0;
    const clientOrderLength = clientOrder.length;

    for (let i = 0; i < clientOrderLength; i++) {
        clientOrderTime += getRandomNumber(100, 500);
    }

    return clientOrderTime;
};

// ->