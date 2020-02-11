console.log('EXERCISE 4:');

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