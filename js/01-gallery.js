import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
let markup = '';
galleryItems
  .map(elem => {
    markup += `<li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</li>`;
  })
  .join(' ');
gallery.insertAdjacentHTML('afterbegin', markup);
gallery.addEventListener('click', onClickOpen);
let instance = ' ';
let source = ' ';
function onClickOpen(e) {
  e.preventDefault();
  if (e.target.tagName !== 'IMG') {
    return;
  } else {
    source = e.target.dataset.source;
  }
  instance = basicLightbox.create(`
    <img src=${source}>
`);
  instance.show();
  document.addEventListener('keydown', closeByEsc);
}
function closeByEsc(e) {
  if (e.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', closeByEsc);
  }
}
console.log(galleryItems);
