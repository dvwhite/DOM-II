// Helper functions

/*
* Add a mouseover and mouseleave event for the nav item passed in
* @param {object} navItem: The nav item to add event listeners to
* @returns: none
*/
function boldNav(navItem) {
    navItem.addEventListener('mouseover', function() {
        navItem.style.fontWeight = 'bold';
        navItem.style.transform = 'scale(1.1)';
        navItem.style.transition = 'all 0.3s ease';
    }, false);

    navItem.addEventListener('mouseleave', function() {
        navItem.style.fontWeight = 'normal';
        navItem.style.transform = 'scale(1.0)';
        navItem.style.transition = 'all 0.3s ease';
    }, false);
}

function preventDefaultNav(navItem) {
    navItem.href = 'https://www.google.com';
    navItem.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

/*
* Style elements on mouseover
* @returns: none
*/
function mouseOver(){
    navContainer.style.backgroundColor = '#FFEBCD';
    navContainer.style.borderBottom = '2px dashed darkgoldenrod';
    navContainer.style.transition = 'all 0.3s ease';
}

/*
* Style elements on mouseleave
* @returns: none
*/
function mouseLeave(){
    navContainer.style.backgroundColor = '#FFFFFF';
    navContainer.style.borderBottom = '2px dashed #C0C0C0';
    navContainer.style.transition = 'all 0.3s ease';
}

/*
* Style elements on mousedown
* @returns: none
*/
function mouseDown() {
    introImg.style.transform = 'scale(1.1)';
}


/*
* Style elements on mouseup
* @returns: none
*/
function mouseUp() {
    introImg.style.transform = 'scale(1.0)';
}

/*
* Add a dblclick event that styles the element passed in
* @param {object} element: The element to add event listeners to
* @param {string} color: The string representing the color
* @returns: none
*/
function colorTextOnDblClick(element, color) {
    element.addEventListener('dblclick', function() {
        element.style.color = color;
        console.log('Double click!')
    });
}

/*
* Add a click event that resets styles on the element passed in
* @param {object} element: The element to add event listeners to
* @returns: none
*/
function resetColorOnClick(element, color) {
    element.addEventListener('click', function(event) {
        element.style.color = color;
        console.log('Click!');
        event.stopPropagation();
    });

}

// Add event listeners

// Add mouseover and mouseleave even listeners to elements in the nav
const navContainer = document.querySelector('.main-navigation');
navContainer.style.zIndex = '1';
navContainer.addEventListener('mouseover', mouseOver, false);
navContainer.addEventListener('mouseleave', mouseLeave, false);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(navLink => boldNav(navLink));
navLinks.forEach(navLink => preventDefaultNav(navLink));

// mousedown and mouseup events
const introImg = document.querySelector('.intro img');
introImg.addEventListener('mousedown', mouseDown, false);
introImg.addEventListener('mouseup', mouseUp, false);

// mouseclick and dblclick events
const pTags = document.querySelectorAll('.container p');
pTags.forEach(tag => colorTextOnDblClick(tag, 'darkgoldenrod'));
pTags.forEach(tag => resetColorOnClick(tag, 'black'));

// For testing stopPropogation with nested click events
const bodyTag = document.querySelector('body');
bodyTag.addEventListener('click', function() {
    console.log('The page has been clicked!');
}, false)

