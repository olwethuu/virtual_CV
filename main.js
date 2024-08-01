/* navbar toggle */

let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*  scrolling in active section*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href"#' + id + ']').classlist.add('active');
            })
        }
}

    )
}


/*stick navbar */

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/**to remove toggle icon and navbar */

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

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


