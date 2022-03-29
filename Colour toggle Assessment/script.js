// Colour menu hover effect

const addAnimationClassColourList = function () {
    const colourMenu = document.getElementById("colour-menu");
    colourMenu.classList.add("menu-hover-animation");
}
const removeAnimationClassColourList = function () {
    const colourMenu = document.getElementById("colour-menu");
    colourMenu.classList.remove("menu-hover-animation");
}

const addHoverEventBarsElement = function() {
    const burgerBars = document.getElementById("bars");
    burgerBars.addEventListener("mouseover", function() {
        addAnimationClassColourList();
    });
    burgerBars.addEventListener("mouseout", function() {
        removeAnimationClassColourList();
    });
}

const addHoverEventMenuElement = function() {
    const colourList = document.getElementById('colour-menu');
    colourList.addEventListener("mouseover", function() {
        addAnimationClassColourList();
    });
    colourList.addEventListener("mouseout", function() {
        removeAnimationClassColourList();
    });
}

addHoverEventBarsElement();

// changing the classes to different backgrounds and removing them

const changeHomeBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("home-background");
    document.getElementById("colour-name").innerHTML = "Home";
}

const changeRedBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("red-background");
    document.getElementById("colour-name").innerHTML = "Red";
}

const changeOrangeBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("orange-background");
    document.getElementById("colour-name").innerHTML = "Orange";
}

const changePurpleBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("purple-background");
    document.getElementById("colour-name").innerHTML = "Purple";
}

const changeGreenBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.add("green-background");
    document.getElementById("colour-name").innerHTML = "Green";
}

// Applying the changes on the menu

const addClickEventHomeColour = function() {
    const homeColour = document.getElementById("home");
    homeColour.addEventListener("click", function() {
        changeHomeBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventRedColour = function() {
    const redColour = document.getElementById("red");
    redColour.addEventListener("click", function() {
        changeRedBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventOrangeColour = function() {
    const orangeColour = document.getElementById("orange");
    orangeColour.addEventListener("click", function() {
        changeOrangeBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventPurpleColour = function() {
    const purpleColour = document.getElementById("purple");
    purpleColour.addEventListener("click", function() {
        changePurpleBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventGreenColour = function() {
    const greenColour = document.getElementById("green");
    greenColour.addEventListener("click", function() {
        changeGreenBackgroundColour();
        removeAnimationClassColourList();
    });
}

// calling the functions

addClickEventHomeColour();
addClickEventRedColour();
addClickEventOrangeColour();
addClickEventPurpleColour();
addClickEventGreenColour();

// keypress identifier

window.addEventListener('keydown', function(event){

    if (event.key == 1) {
        changeHomeBackgroundColour();
    } else if (event.key == 2) {
        changeRedBackgroundColour();
    } else if (event.key == 3) {
        changeOrangeBackgroundColour();
    } else if (event.key == 4) {
        changePurpleBackgroundColour();
    } else if (event.key == 5) {
        changeGreenBackgroundColour();
    }
});