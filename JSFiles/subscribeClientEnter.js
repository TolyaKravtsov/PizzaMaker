'use strict';

// Subscribe Functions <-

const subscribeClientEnter = client => {
    clientsArray[client.id] = {...clientsArray[client.id], orderTime: setClientOrderTime(client.clientOrder)};

    // Tags
    const spanClientNumber = document.createElement('span');
    const spanClientPizzaIngredients = document.createElement('span');
    const spanPizzaStatus = document.createElement('span');

    spanClientNumber.className = "tableBorder";
    spanClientNumber.innerHTML = client.id + 1;
    clientNumberField.appendChild(spanClientNumber);
    spanClientPizzaIngredients.className = "tableBorder";
    spanClientPizzaIngredients.innerHTML = client.clientOrder.join(', ');
    clientPizzaIngredientsField.appendChild(spanClientPizzaIngredients);
    spanPizzaStatus.className = "tableBorder";
    spanPizzaStatus.innerHTML = pizzaStatuses[1];
    pizzaStatusField.appendChild(spanPizzaStatus);
};

// ->
