console.log('EXERCISE 1:');

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