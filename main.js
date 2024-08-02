/* navbar toggle */
show();

let menuIcon = document.querySelector('#menu-icon');
let exit = document.querySelector('#exit');
let navbar = document.querySelector('.navbar');

const navBar = document.getElementById("nav-menu");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('.active');
}



function show(){
    // navbar.classList.add('active');
    // console.log("its working");
    // document.getElementById("nav-menu").style.display = "flex";
}

menuIcon.onclick = () => {
    navbar.classList.add('active');
    // document.getElementById("nav-menu").style.display = "flex";
}

exit.onclick = () => {
    navbar.classList.remove('active');
    // document.getElementById("nav-menu").style.display = "flex";
}


// document.getElementById("#menu-icon").addEventListener("click", show);




let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + '"]').classList.add('active');
            });
        };

    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
    





/**scroll reveal, to help with the scrolling */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home.img, .skills-container, .project-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .home-img', {origin: 'left'});
ScrollReveal().reveal('.home.contact p, .about-content', {origin: 'right'});

