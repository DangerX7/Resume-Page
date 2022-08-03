var button = document.querySelector(".button");
var imageX = document.querySelector(".i-danger");
var wasClicked = false;
button.addEventListener("click", function() {
    
    if(!wasClicked) {
        imageX.style.width = "566px";
        imageX.style.height = "818px";
        wasClicked = true;
    } else {
        imageX.style.width = "283px";
        imageX.style.height = "409px";
        wasClicked = false;
    }
}, false);