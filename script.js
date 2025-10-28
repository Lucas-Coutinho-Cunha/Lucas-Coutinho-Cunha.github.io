const sizes = [1,1,2,3,4];
let stars = null

//get random position between 1 - 100;
function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const body = document.querySelector(".body");


function darkModeToggle()
{
    if (sessionStorage.getItem("darkMode") == "false")
    {
        sessionStorage.setItem("darkMode", "true")
        spawnStars()
        document.documentElement.style.cssText = "--sky-dark: #05092a; --sky-bright: #1d325f; --font-color: #fff6ac";
    }
    else
    {
        despawnStars()
        sessionStorage.setItem("darkMode", "false")
        document.documentElement.style.cssText = "--sky-dark: #8bb6c8; --sky-bright: #d7ebf3; --font-color: #000000";
    }
}


function despawnStars()
{
    if (stars) {
        while (stars.firstChild) {
            stars.removeChild(stars.lastChild);
        }
    }
}


function spawnStars()
{
for (let i = 0; i < 150; i++) {
    const top = randomPosition(11,49);
    const left = randomPosition(1,99);
    const random = Math.floor(Math.random() * sizes.length);
    const randomSize = sizes[random];
    const div = document.createElement('div');
    stars = document.getElementById("stars");
    div.style.position = 'absolute';
    div.style.top = top +'%';
    div.style.left = left + '%';
    div.style.height = randomSize +'px';
    div.style.width = randomSize +'px';
    div.style.backgroundColor = "#FFFFFF";
    div.style.borderRadius = '50%';
    if (i <= 50) {
        div.classList.add('star1');
    }
    if (i <= 100 && i > 50) {
        div.classList.add('star2');
    }
    if (i <= 150 && i > 100) {
        div.classList.add('star3');
    }
    if (i <= 200 && i > 150) {
        div.classList.add('star4');
    }
    if (i <= 250 && i > 200) {
        div.classList.add('star5');
    }
    if (i <= 300 && i > 250) {
        div.classList.add('star6');
    }
    stars.appendChild(div);
    }
}


function setColors()
{
    if (sessionStorage.getItem("darkMode") == "false")
    {
        document.documentElement.style.cssText = "--sky-dark: #8bb6c8; --sky-bright: #d7ebf3; --font-color: #000000";
    }
    else
    {
        document.documentElement.style.cssText = "--sky-dark: #05092a; --sky-bright: #1d325f; --font-color: #fff6ac";
        spawnStars()        
    }
}

