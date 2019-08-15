'use strict';

const pizzaMakingGenerator = async clientsArray => {
    let emitter = new EventEmitter();
    emitter.subscribe('client-enter', (client) => subscribeClientEnter(client));

    let totalClients = 0;
    for (const client of clientsArray) {
        await new Promise((resolve) => {
            setTimeout(() => {
                emitter.emit('client-enter', client);
                totalClients++;
                totalClientsField.innerText = String(totalClients);
                resolve()
            }, getRandomNumber(1000, 3000));
        })
    }
    console.log(clientsArray);

};