import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector(".gallery"),
}

const imageMarkup = galleryItems.map(a => {
    const { preview, original, description } = a;
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
})

const imagesListMarkup = imageMarkup.join(" ");

refs.gallery.innerHTML = imagesListMarkup;

let gallery = new SimpleLightbox('.gallery__item');
gallery.on('show.simplelightbox', function () {
	gallery.defaultOptions.captionDelay = 250;
    gallery.defaultOptions.captionsData = "alt";
});

