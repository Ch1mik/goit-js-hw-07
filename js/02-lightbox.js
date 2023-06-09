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

// var lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
console.log(galleryItems);
