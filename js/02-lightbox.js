import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markupGallery = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markupGallery);

function createGalleryMarkup(items) {
	return items
		.map(({ preview, description, original }) => {
			return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
		})
		.join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionsDelay: 250,
});
