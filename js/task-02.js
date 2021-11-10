const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const itemEl = ingredients.map(ing => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ing;
  return item;
})
listEl.append(...itemEl);
