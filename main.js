//Navbar Functions
let rightBarBtn = document.getElementsByClassName('right-bar-btn')[0];
let links = document.getElementsByClassName('links')[0];

rightBarBtn.addEventListener('click', function clicky() {
    if (links.style.display == 'none') {
        links.style.display = 'flex';
    }
    else {
        links.style.display = 'none';
    }
});

window.addEventListener('resize', function linksShow() {
    let screenwidth = window.innerWidth;
    if (screenwidth < 600) {
        links.style.display = 'none'
    }
    if (screenwidth >= 600) {
        links.style.display = 'flex';
    };
});
