let searchIcon = document.querySelector('.icon-search');
let searchBox = document.querySelector('.search-text');
let navToggler = document.querySelector('.hamburger');
let sideNavClose = document.querySelector('.side-nav-close');

searchIcon.addEventListener('mouseover', () => {
    searchBox.style.width = "100px";
    searchBox.style.borderBottom = "1px solid white";
});

searchIcon.addEventListener('mouseout', () => {
    searchBox.style.width = "0";
    searchBox.style.borderBottom = "none";
});

searchBox.addEventListener('mouseover', () => {
    searchBox.style.width = "100px";
    searchBox.style.borderBottom = "1px solid white";
});

searchBox.addEventListener('mouseout', () => {
    searchBox.style.width = "0";
    searchBox.style.borderBottom = "none";
});

navToggler.addEventListener('click', () =>{
    let sideNav = document.querySelector('.side-nav');
    sideNav.style.marginLeft = "40%";
});

sideNavClose.addEventListener('click', ()=>{
    let sideNav = document.querySelector('.side-nav');
    sideNav.style.marginLeft = "100%";
})