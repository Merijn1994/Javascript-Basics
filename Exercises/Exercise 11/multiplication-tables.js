const multiplier = 9;
for (let i = 0; i <= 10; i++) {
    let result = i * multiplier;
    console.log(i, 'x 9 = ', result);
}

for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let i = 0; i <= 10; i++) {
        let result = multiplier * i;
        console.log(multiplier + '*' + i + '=' + result);
    }
}