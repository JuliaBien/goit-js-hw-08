// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
for (const item of galleryItems) {
  const listElement = document.createElement('li');
  listElement.innerHTML = `<a class="gallery__item" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        alt=${item.description}
      />
    </a>`;
  galleryList.append(listElement);
}
const showOryginalSize = ev => {
  ev.preventDefault();
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: 'true',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
};
galleryList.addEventListener('click', showOryginalSize);
