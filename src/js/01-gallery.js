
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener("click", onClickGalleryItem);

function createGalleryItems() {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onClickGalleryItem(evt) {
  blockAction(evt);
  onOpenAndCloseGalleryItem(evt);
}

function blockAction(evt){
  evt.preventDefault();
}
function onOpenAndCloseGalleryItem(evt){
  if(evt.target.nodeName !== 'IMG'){
    return;
  }
  const instance = basicLightbox.create(`
  <img width="1400" height="900" src="${evt.target.dataset.source}">`);
  instance.show();
  
  gallery.addEventListener('keydown', onEscCloseGalleryItem)
  function onEscCloseGalleryItem(evt){
    if(evt.code === 'Escape'){
      instance.close();
      gallery.removeEventListener('keydown', a)
    }
  }
}
