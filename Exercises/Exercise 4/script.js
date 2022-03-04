const age = 25;
const isFemale = false;
const driverStatus = 'designated';
const firstName = 'Pim';
const totalAmount = 25;

if (age >= 18) {
    console.log('Go ahead and enjoy your time in our pub!');
}   else{
    console.log('Sorry, you not 18 years or older and therefore we cannot let you enter the pub.');
}

if (isFemale) {
    console.log('You are a female');
}   else{
    console.log('You are not a female');
}

if (driverStatus === 'designated') {
    console.log('You are the designated driver and are allowed to drive');
}   else{
    console.log('You are not the designated driver and therefore not allowed to drive');
}   

if (age >= 18 && age <= 25) {
    console.log('You get 50% off!');
}   else {
    console.log('Gotta pay full price, bozo!');
}

if (firstName === 'Bram' || firstName === 'Sarah') {
    console.log('You get a free beer!');
}   else {
    console.log('No free beer for you, bozo!');
}

if (totalAmount >= 100) {
    console.log("free bottle of champagne.");
}   else if (totalAmount > 50) {
    console.log("free serving of nachos");
}   else if (totalAmount > 25) {
    console.log("free (vega) bitterballs");
}   else {
    console.log("Unfortunately you don't get a discount, but it's nice to have you!");
}