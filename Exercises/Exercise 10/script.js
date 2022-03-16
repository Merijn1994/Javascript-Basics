// Hey kiddo

const ageCheck = (age) => {
    if (age>=18) return true;
};

const adultCheck = (age) => {
    if (ageCheck(age) === true) return 'Hello there';
    if (ageCheck(age) != true) return 'Hey kiddo';
};

console.log(adultCheck(18));

// VAT calculations

const vatAmount = (vatPercentage, basePrice) => {
    return (vatPercentage/100) * basePrice; 
};

const vatIncluded = (vatPercentage, basePrice) => {
    const VAT = vatAmount(vatPercentage, basePrice);
    return basePrice + VAT;
};

console.log(vatIncluded(21, 1000));
console.log(vatIncluded(9, 2));

const calculateBasePrice = (priceIncludingVAT, vatPercentage) => {
    const basePrice = priceIncludingVAT / ((vatPercentage + 100) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = (priceIncludingVAT, vatPercentage) => {
    const basePrice = calculateBasePrice(priceIncludingVAT, vatPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
}

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));