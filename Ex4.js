console.log('EXERCISE 4:');

// 5

const ex5 = document.querySelector('.ex5');
const ex5LiList = ex5.querySelectorAll('li');

for (let i = 0; i < ex5LiList.length; i++) {
    if (i % 2 === 0) {
        ex5LiList[i].style.backgroundColor = 'green';
    }

    if (i % 3 === 0) {
        ex5LiList[i].style.border = '3px solid red';
    }
}

ex5LiList[4].classList.add('big');

// 1

const ex1 = document.querySelector('.exercise.ex1');
console.log(ex1);

let ex1Logo = ex1.querySelector('.edge');
console.log(ex1Logo);

ex1Logo.style.backgroundImage = "url('assets/edge.png')";

let ex1Firefox = ex1.querySelector('.firefox');

ex1Firefox.style.backgroundImage = "url('assets/firefox.png')";

let ex1HrefOpera = ex1.querySelector('div:nth-child(2) > a');
console.log(ex1HrefOpera);

ex1HrefOpera.setAttribute("href", 'www.opera.com');
ex1HrefOpera.innerText = "Chrome";

let ex1HrefFirefox = ex1.querySelector('div:nth-child(4) > a');

ex1HrefOpera.setAttribute("href", "www,firefox.com");
ex1HrefFirefox.innerText = "Firefox";

let ex1HrefEdge = ex1.querySelector('div:nth-child(3) > a');

ex1HrefEdge.setAttribute("href", "www.edge.com");

let ex1Chrome = ex1.querySelector('.chrome');
ex1Chrome.style.width = '100px';


// ex1Links[0].innerText = 'Chrome';
//
// const ex1Chrome = ex1.querySelector('.chrome');
// ex1Chrome.style.width = '100px';
//
// const ex1ImageEdge = ex1.querySelector('.edge');
// ex1ImageEdge.style.backgroundImage = 'url(assets//egde.png)';
//
// ex1Links[1].setAttribute('href', 'https://www.microsoft.com/en-us/windows/microsoft-edge/');
//
// const ex1ImageFirefox = ex1.querySelector('.firefox');
// ex1ImageFirefox.style.backgroundImage = 'url(assets/firefox.png)';
//
// ex1Links[2].innerText = 'Firefox';
//
// ex1Links[2].setAttribute('href', 'https://www.mozilla.org/en-US/firefox/new/');