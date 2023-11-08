// alert("Hello Class!");

var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button")
// console.log(burgerBtn);
// this can only be true or false known as a boolean
var canYouSeeMainNav = false;

// var sectionTags = document.querySelectorAll(".myClass");

function showNav(){
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        // this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");
        canYouSeeMainNav = false;
    }
    
}

// add a event listener to the button
burgerBtn.addEventListener("click", showNav);

// will call a function with the name of showNav
// showNav();