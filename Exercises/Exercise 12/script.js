const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(color => console.log(color));

const myColours = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGrass: "green",
};

for (let property in myColours) {
    console.log(myColours[property]);
}