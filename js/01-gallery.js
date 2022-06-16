import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector(".gallery"),
}

const imageMarkup = galleryItems.map(a => {
    const { preview, original, description } = a;
    return `<div class="gallery__item">
        <a class="gallery__link" onclick="return false;" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
})

const imagesListMarkup = imageMarkup.join(" ");

refs.gallery.innerHTML = imagesListMarkup;

refs.gallery.addEventListener("click", onImageClickModalOpen)

function onImageClickModalOpen (event) {
    const clickOnImage = event.target.classList.contains("gallery__image");
    const srcOriginImageOnClick = event.target.dataset.source;
    if (clickOnImage) {
        onModalOpen(srcOriginImageOnClick);        
    }     
}

function onModalOpen (src) {
    const instance = basicLightbox.create(`<img src="${src}" width="800" height="600">`, {
        
        onShow: () => {
            document.addEventListener("keydown", onModalClose);
        },
        
        onClose: () => {{
            document.removeEventListener("keydown", onModalClose);
        }}
    } )

    instance.show()
        
    function onModalClose (event) {
            if (event.code === "Escape") {
                instance.close()
            }
        }   
}




