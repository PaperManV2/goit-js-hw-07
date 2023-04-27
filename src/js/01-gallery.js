import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const firstImage = galleryItems[0].original;

// const instance = basicLightbox.create(`
//     <img src="${firstImage}" width="800" height="600">
// `);

const galleryObject = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryObject.append(galleryItem);

  galleryItem.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>`
  );
});

let instance = null;

const linkUsage = document.querySelectorAll(".gallery__link");
linkUsage.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    let image = item.getAttribute("href");

    instance = basicLightbox.create(`<img src="${image}" />`);

    instance.show();
  });
});

document.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (event.code == "Escape") {
    instance.close();
  }
});
