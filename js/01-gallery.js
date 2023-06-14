import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markupGallery = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markupGallery);

galleryList.addEventListener("click", onOpenModalGallery);

function createGalleryMarkup(items) {
	return items
		.map(({ preview, description, original }) => {
			return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
		})
		.join("");
}

function onOpenModalGallery(e) {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") {
		return;
	}

	const originalModal = basicLightbox.create(
		`
    <img src="${e.target.dataset.source}">
`,
		{
			onShow: () => window.addEventListener("keydown", onPressEscClose),
			onClose: () => window.removeEventListener("keydown", onPressEscClose),
		}
	);

	originalModal.show();

	function onPressEscClose(e) {
		if (e.code === "Escape") {
			originalModal.close();
		}
	}
}
