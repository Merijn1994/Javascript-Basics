// Checking if a number is big

const numberCheck = function(number) {
    if (number<=100) {
        return false;
    };

    if (number>100) {
        return true;
    };
};
console.log(numberCheck(101));

// The function produces something

// Bouncer at a club

const bouncerBrenda = function(maxPeople, currentPeople, age) {
    if (currentPeople<maxPeople && age>=18) {
        return 'Come in';
    };
    if (currentPeople=maxPeople && age>=18) {
        return "it's too busy now, come back later";
    };
    if (age<18) {
        return 'this is a club for adults';
    };
};
const maxPeople = 100;
let currentPeople = 100;
let age = 17;
console.log(bouncerBrenda(maxPeople, currentPeople, age));

// The function produces something

const calculateAverage =function(n1, n2, n3, n4, n5) {
    let numbers = [n1, n2, n3, n4, n5];
    let average = (n1 + n2 + n3 + n4 + n5)/(numbers.length);
    return Math.round(average);
};

console.log(calculateAverage(10, 4, 8, 6, 14));

// The function produces something