//Navbar Functions
// DROPDOWN NAV BAR CODE

let rightBarBtn = document.getElementsByClassName('right-bar-btn')[0];
let links = document.getElementsByClassName('links')[0];
let backBtn = document.getElementsByClassName('back')[0];

rightBarBtn.addEventListener('click', () => {
    if (links.style.display != 'block') {
        links.style.display = 'block';
        links.classList.add("appear");
        links.classList.remove("links-slide-up");
    }
    else {
        links.classList.add("appear");
        links.classList.remove("links-slide-up");
    }
});

window.addEventListener('resize', () => {
    let screenwidth = window.innerWidth;
    if (screenwidth <= 700) {
        links.style.display = 'none'
    }
    if (screenwidth > 700) {
        links.style.display = 'flex';
        links.classList.remove("links-slide-up");

    };
});

backBtn.addEventListener('click', () => {
  links.classList.remove("appear");
  links.classList.add("links-slide-up");
});





// APPEAR ON SCROLL COD
const scrollElements = document.querySelectorAll(".js-scroll");

// If the top of the element is less than the viewport height, then the element is visible.
const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top; // Get the top of the element
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) // Compare the top of the element to the viewport height
    );
};

// If the top of the element is more than the viewport height, then the element is not visible.
const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight) // See if the top of the element is greater than the viewport height.
    );
  };

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => { // For every element than has the .js-scroll class
      if (elementInView(el)) { // If the top of the element is less than the viewport
        el.classList.add("appear"); // Add the .appear class
      } else if (elementOutofView(el)) { // If the top of the element is greater than the viewport
        el.classList.remove("appear"); // Remove the .appear class
      }
    })
  }

window.addEventListener("scroll", () => { 
handleScrollAnimation();
});

// FAILED VERSION OF ON SCROLL APPEARANCE
// window.addEventListener("scroll", function() {showFunction()});
// let appearOver900 = 0;

// function showFunction() {
//     if (appearOver900 < 1) {
//         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         document.getElementsByClassName("text")[0].style.opacity = "100";
//         document.getElementsByClassName("text")[0].style.transition = "all 1s";
//         appearOver900 += 1;
//     } else {
//         document.getElementsByClassName("text")[0].style.opacity = "0";
//     }
//     }
    
// }