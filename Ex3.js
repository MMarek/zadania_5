console.log('EXERCISE 3:');

const homeElement = document.getElementById("home");
const childElements = document.querySelector(".oferts").querySelectorAll("div,h2,p");
const banner = document.querySelector(".ban");
const blocks = document.querySelectorAll(".block");
const links = document.querySelector(".links").querySelectorAll("li");

// 1
console.log(homeElement.tagName, homeElement.className);

for (let i = 0; i < childElements.length; i++) {
    console.log(childElements[i].tagName, childElements[i].className);
}

for (let i = 0; i < blocks.length; i++) {
    console.log(blocks[i].tagName, blocks[i].className)
}

for (let i = 0; i < links.length; i++) {
    console.log(links[i].tagName, links[i].className);
}

// 2

for (let i = 0; i < blocks.length; i++) {
    console.log(blocks[i].innerText);
    blocks[i].innerText = 'New div with class blocks / podmiana tekstu :)'
}

// 3

const superFooter = document.querySelector(".superFooter");
console.log(superFooter);

function getId(element) {
    return element.id;
}

console.log(getId(superFooter));

// 4

function getTags(elements) {
    let emptyArr = [];

    for (let i = 0; i < elements.length; i++) {
        emptyArr.push(elements[i].tagName);
    }
    return emptyArr;
}

console.log(getTags(childElements));

// console.log(homeElement);
// console.log(childElements);
// console.log(banner);
// console.log(blocks);
// console.log(links);