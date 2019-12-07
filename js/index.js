// Helper functions
function boldNav(navItem) {
    navItem.addEventListener('mouseover', function() {
        navItem.style.fontWeight = 'bold';
    }, false);

    navItem.addEventListener('mouseleave', function() {
        navItem.style.fontWeight = 'normal';
    }, false);
}

// Add event listeners

// mouseover and mouseleave for the nav
const navContainer = document.querySelector('.main-navigation');

navContainer.addEventListener('mouseover', function(){
    navContainer.style.backgroundColor = '#FFEBCD';
}, false);

navContainer.addEventListener('mouseleave', function(){
    navContainer.style.backgroundColor = '#FFFFFF';
}, false);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(navLink => boldNav(navLink));