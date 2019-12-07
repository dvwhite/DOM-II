// Add event listeners

// mouseover and mouseleave for the nav
const navContainer = document.querySelector('.main-navigation');
console.log(navContainer)

navContainer.addEventListener('mouseover', function(){
    navContainer.style.backgroundColor = 'dodgerblue';
}, false);

navContainer.addEventListener('mouseleave', function(){
    navContainer.style.backgroundColor = '#FFFFFF';
}, false);