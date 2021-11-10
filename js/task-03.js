const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery')
galleryListEl.style.display = 'flex';
galleryListEl.style.justifyContent = 'center';

const itemEl = images.map(img => {
  const item = document.createElement('li');
  item.style.marginRight = '15px';
  item.style.listStyle = 'none';
  const itemImgEl = document.createElement('img');
  itemImgEl.src = img.url;
  itemImgEl.alt = img.alt;
  itemImgEl.style.width = '200px';
  itemImgEl.style.height = '130px';
  item.append(itemImgEl);

  return item;
});

galleryListEl.append(...itemEl);