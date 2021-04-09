const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");

// galleryRef.append(listItemEl);

// listItemEl.append(imgEl);

// console.log(galleryRef);

// ------------------------------------------------------

// const makeGallery = (options) => {
//   return options.map((image, alternative) => {
//     const listItemEl = document.createElement("li");
//     const imgEl = document.createElement("img");
//     imgEl.src = image;
//     imgEl.alt = alternative;
//     imgEl.width = 320;
//     listItemEl.append(imgEl);
//     return listItemEl;
//   });
// };

// const galleryDone = makeGallery(images);

// galleryRef.append(...galleryDone);
// --------------------------------------------------------

const galleryDone = images.map(images => {
        const listItemEl = document.createElement("li");
        const imgEl = document.createElement("img");
        imgEl.src = images.url;
        imgEl.alt = images.alt;
        imgEl.width = 320;
        listItemEl.append(imgEl);
        return listItemEl;
      });

      galleryRef.append(...galleryDone)