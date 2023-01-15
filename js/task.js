'use strict';

// Compose Task Udemy



const compose = (...arguments) => (x) => {
    for (let i = arguments.length; i >= 0; i--) {
        console.log(arguments[i]);
    }
};

compose(1, 2, 3, 4, 6);

const composeWithArgs = () => { };

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const composeX = (a, b, c) => (x) => a(b(c(x)));
composeX(1, 2, 3, 5);