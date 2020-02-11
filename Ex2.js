console.log('EXERCISE 1:');

function biggestSumOfTwoElements(array) {
    let sortedArr = array.sort();
    if (array.length === 0) {
        return false;
    }
    if (array.length === 1) {
        return array[0];
    }
    return sortedArr[array.length - 1] + sortedArr[array.length - 2];
}

console.log(biggestSumOfTwoElements([1,3,5,7,9]));
console.log(biggestSumOfTwoElements([]));
console.log(biggestSumOfTwoElements([32]));
console.log(biggestSumOfTwoElements([111,36,54,78,99]));