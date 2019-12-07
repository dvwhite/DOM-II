// Helper functions

/*
* Add a mouseover and mouseleave event for the nav item passed in
* @param {object} navItem: The nav item to add event listeners to
* @returns: none
*/
function boldNav(navItem) {
    navItem.addEventListener('mouseover', function() {
        navItem.style.fontWeight = 'bold';
    }, false);

    navItem.addEventListener('mouseleave', function() {
        navItem.style.fontWeight = 'normal';
    }, false);
}

// Add event listeners

// Add mouseover and mouseleave even listeners to elements in the nav
const navContainer = document.querySelector('.main-navigation');

navContainer.addEventListener('mouseover', function(){
    navContainer.style.backgroundColor = '#FFEBCD';
}, false);

navContainer.addEventListener('mouseleave', function(){
    navContainer.style.backgroundColor = '#FFFFFF';
}, false);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(navLink => boldNav(navLink));

// 