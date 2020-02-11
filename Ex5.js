console.log('EXERCISE 4:');

// zad

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    const parentList = document.querySelectorAll('.parent');
    for (let i = 0; i < parentList.length; i++) {
        parentList[i].addEventListener('mouseenter', function() {
            console.log('enter', this);

            const child = this.querySelector('.children');
            child.style.display = 'block';
        });

        parentList[i].addEventListener('mouseleave', function () {
            const child = this.querySelector('.children');
            child.style.display = 'none';
        })
    }
});

// 1

const menu = document.querySelector('#menu');
const paragraf = document.querySelector('p');

menu.classList.add('menu');
paragraf.innerHTML = "First paragraf - EXERCISE 5/1 :)";

// 2