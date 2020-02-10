console.log('EXERCISE 1:');

// 1

const  sampleList = document.querySelectorAll('.sample_class');

function getTag(elements) {
    const newArr = [];
    for (let i = 0; i < elements.length; i++) {
        newArr.push(elements[i].tagName);
    }
    return newArr;
}

const res1 = getTag(sampleList);
console.log(res1);

// 2

const sampleEl = document.querySelector('#sample_id');

function getClass(element) {
const classList = [];
    for (let i = 0; i < element.classList.length; i++) {
        classList.push(element.classList[i]);
    }
    return classList;
}

const res2 = getClass(sampleEl);
console.log(res2);

// 3

const sampleList2 = document.querySelectorAll('.sample_class_2');

function getInnerText(elements) {
    const innerArray = [];
    for (let i = 0; i < elements.length; i++) {
        innerArray.push(elements[i].innerText);
    }
    return innerArray
}

const res3 = getInnerText(sampleList2);
console.log(res3);

// 4

const aList = document.querySelectorAll('a');

function getAddres(elements) {
    const aArr = [];
    for (let i = 0; i < elements.length - 1; i++) {
        aArr.push(elements[i].getAttribute("href"));
    }
    return aArr
}

const res4 = getAddres(aList);
console.log(res4);

// 5

const sampleChilds = document.querySelector('.sample_class_3').children;

const res5 = getTag(sampleChilds);
console.log(res5);