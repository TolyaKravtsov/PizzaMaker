'use strict';
// Helpers <-

const shuffleArray = arr => {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
};

const getRandomNumber = (min, max) => {
    let randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
};

// ->