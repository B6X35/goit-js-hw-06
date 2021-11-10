const categoriesEl = document.querySelector('#categories');
const categoriesItemEl = categoriesEl.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItemEl.length}`);

for (let i = 0; i < categoriesItemEl.length; i += 1) {
    const titleItemEl = categoriesItemEl[i].querySelector('h2');
    console.log(`Category: ${titleItemEl.textContent}`);

    const itemEl = categoriesItemEl[i].querySelectorAll('li');
    console.log(`Elements: ${itemEl.length}`);
}