'use strict'

const item = document.querySelectorAll('.item')

console.log(item.length);



item.forEach(item => {
    
    const heading = item.querySelector('h2');
    
    const categoryTitle = heading.textContent.trim();
    const categoryElements = item.querySelectorAll('li');
    const elementsCount = categoryElements.length;

    console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${elementsCount}`);
});
