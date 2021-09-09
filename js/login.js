let signUpButton = document.getElementsByClassName('to-sign-in')[0];
let signInButton = document.getElementsByClassName('to-sign-up')[0];
const container = document.getElementsByClassName('container')[0];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
}
);

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    console.log(1);
}
);

if(window.location.href.includes("signup")){
    container.classList.add('right-panel-active');
}

let signup = document.querySelector('.sign-up-container');
let signin = document.querySelector('.sign-in-container');
let overlay = document.querySelector('.overlay-container');

const setSign = () => {
    if(document.body.clientWidth < 960 && window.location.href.includes("login")){
        signup.style.display = "none";
        overlay.style.display = "none";
        // container.classList.remove('right-panel-active');
    }
    if(document.body.clientWidth >= 960 && window.location.href.includes("login")){
        signup.style.display = "flex";
        overlay.style.display = "inline-block";
    }
    if(document.body.clientWidth < 960 && window.location.href.includes("signup")){
        signin.style.display = "none";
        overlay.style.display = "none";
        // container.classList.remove('right-panel-active');
    }

    if(document.body.clientWidth >= 960 && window.location.href.includes("signup")){
        signin.style.display = "flex";
        overlay.style.display = "inline-block";
    }
}

window.addEventListener("resize", setSign);

window.addEventListener("load", setSign);