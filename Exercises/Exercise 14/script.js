let buttonAlert = document.getElementById('mybutton');

buttonAlert.addEventListener("click", function(){ alert("Button clicked")});


// change/toggle the class of the body
const toggleColour = function () {
    const bodyElement = document.getElementById('body');
    bodyElement.classList.toggle("red-background");    
};

// create an event that changes/toggles the class when clicking a button
const attachClickEventBackgroundChange = function() {
    const changeColourButton = document.getElementById('change-background');
    changeColourButton.addEventListener("click", function() {
        toggleColour();
    });
}

attachClickEventBackgroundChange();