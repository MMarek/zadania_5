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


// console.log(homeElement);
// console.log(childElements);
// console.log(banner);
// console.log(blocks);
// console.log(links);