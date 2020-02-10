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
