'use strict';

// Global variables <-

// All Clients are in array
let clientsArray = [];

// All Pizza elements
const pizzaElements = ["огурцы", "помидоры", "сыр моцарелла", "колбаса", "ананасы", "кетчуп", "майонез", "сыр Фета", "сыр пармезан", "грибы"];

// Pizza Statuses
const pizzaStatuses = ['Ready', 'In progress'];

// Fields

const clientNumberField = document.getElementById('client');
const clientPizzaIngredientsField = document.getElementById('ingredients');
const pizzaStatusField = document.getElementById('status');
const totalClientsField = document.getElementById('total');

// ->




const mainGenerator = () => {
    const clientsAmount = getRandomClientsAmount();

    for (let i = 0; i < clientsAmount; i++) {
        const clientObj = {
            id: i,
            clientOrder: getPizzaArray(),
            waitingTime: getRandomNumber(1000, 3000),
        };
        clientsArray.push(clientObj);
    }

    pizzaMakingGenerator(clientsArray).then(() => {
        console.log("Finished generator!")
    })

};


mainGenerator();