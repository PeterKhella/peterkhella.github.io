const MENU_HEIGHT = 75;

//menu scroll feature

const homeLink = document.getElementById("home-link");
const projectsLink = document.getElementById("projects-link");
const hobbiesLink = document.getElementById("hobbies-link");
const aboutLink = document.getElementById("about-link");

function activateLink(el) {
    // create Array of all buttons, removes udrline then adds udrline to el
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (btn) {
        btn.classList.remove("udrline");
    });
    el.classList.add("udrline");
}

function scrollToElement(id) {
    // get element by id 
    const el = document.getElementById(id);
    // make sure element exisits
    if (el) {
        // create offset
        const offset = el.offsetTop - MENU_HEIGHT;
        // scroll to setion
        window.scroll({
            top: offset,
            behavior: "smooth"
        });
    }

}

// event listeners for menu buttons

homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("home");
    activateLink(homeLink);
});
projectsLink.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("projects");
    activateLink(projectsLink);
});
hobbiesLink.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("hobbies");
    activateLink(hobbiesLink);
});
aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    scrollToElement("about");
    activateLink(aboutLink);
});


//menu open and close
//listen for clicks on hamburger icon
document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector(".menu").classList.add("open");
    document.getElementById("hamburger").classList.add("off");
    document.getElementById("hamburger-close").classList.remove("off");

});

document.getElementById("hamburger-close").addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("open");
    document.getElementById("hamburger").classList.remove("off");
    document.getElementById("hamburger-close").classList.add("off");

});


//photo slide for projects 

const channel = document.querySelectorAll('.channel');
console.log(channel);

for (let i = 0; i < channel.length; i++) {
    console.log('channel array position', i, channel[i]);
    channel[i].addEventListener('click', imageSwitcher);
}

function imageSwitcher(event) {
    console.log(event, "hello");

    if (event.target.innerText === '1') {
        document.querySelector('#slide-screen img').setAttribute('src', './images/Artistic Imp/Log In.jpeg');
    }
    else if (event.target.innerText === '2') {
        document.querySelector('#slide-screen img').setAttribute('src', './images/Artistic Imp/Squid Games.jpeg');
    }
    else if (event.target.innerText === '3') {
        document.querySelector('#slide-screen img').setAttribute('src', './images/Artistic Imp/The Chosen One.jpeg');
    }
}

// random button
const randomButton = document.getElementById("randombtn");
const random = document.querySelectorAll('.random');
randomButton.addEventListener('click', factSwither);

console.log(random);
// define arrays
for (let i = 0; i < random.length; i++) {
    console.log('random array position', i, random[i]);
}
//pick random
function factSwither(event) {
    
    const start = 0;
    const end = random.length - 1;
    const selected = Math.floor(Math.random() * (end - start + 1) + start);
    const selectedEl = random[selected];

    random.forEach(function (rand) {
    rand.classList.remove("show");
    });
    selectedEl.classList.add('show');
}

factSwither();


document.getElementById("email").addEventListener("click", function () {
    document.querySelector(".email-form").classList.add("open");
    // document.getElementById("hamburger").classList.add("off");
    // document.getElementById("hamburger-close").classList.remove("off");
});
document.getElementById("email-close").addEventListener("click", function () {
    document.querySelector(".email-form").classList.remove("open");
    // document.getElementById("hamburger").classList.remove("off");
    // document.getElementById("hamburger-close").classList.add("off");
});