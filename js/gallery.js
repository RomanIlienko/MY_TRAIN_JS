// const galleryItems = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

// const refs = {
//   gallery: document.querySelector('.gallery'),
//   modal: document.querySelector('.lightbox'),
//   overlay: document.querySelector('.lightbox__overlay'),
//   imgWrapper: document.querySelector('.lightbox__content'),
//   img: document.querySelector('.lightbox__image'),
//   closeButton: document.querySelector('.lightbox__button')
// }

// const galleryList = makeGalleryList(galleryItems)
// refs.gallery.insertAdjacentHTML('beforeend', galleryList)
// refs.gallery.addEventListener('click', onGalleryContainerClick)
// refs.closeButton.addEventListener('click', closeModal)

// function makeGalleryList(gallery) {
//   return gallery.
//     map(({ preview, original, description }) => {
//       return `
//         <li class="gallery__item">
//           <a class="gallery__link"
//             href="${original}" >
//             <img class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//             />
//           </a>
//         </li>`
//     })
//     .join('')
// }

// function onGalleryContainerClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return
//   }

//   refs.modal.classList.add('is-open')
//   refs.img.src = event.target.dataset.source
//   refs.img.alt = event.target.alt

//   refs.overlay.addEventListener('click', closeModalOnOverlayClick)
//   window.addEventListener('keydown', closeModalByEscape)
//   refs.closeButton.addEventListener('click', closeModal)
// }

// function closeModal() {
//   refs.modal.classList.remove('is-open')
//   refs.overlay.removeEventListener('click', closeModalOnOverlayClick)
//   window.removeEventListener('keydown', closeModalByEscape)
//   refs.closeButton.removeEventListener('click', closeModal)
//   refs.img.src = ''
//   refs.img.alt = ''
// }
 
// function closeModalByEscape(event) {
//   if (event.code === 'Escape') {
//     closeModal(event)
//   }
// }

// function closeModalOnOverlayClick(event) {
//   if (event.target === event.currentTarget) {
//     closeModal(event)
//   }
// }

