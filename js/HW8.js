// const container = document.querySelector('.container')
// // console.log(container);
// const button = document.querySelector('.button')
// // console.log(button);
// const addBtn = document.querySelector('.js-add-button');
// // console.log(addBtn);

// const onClick = (event) => {
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log(event.target.textContent);
//     if (event.target.nodeName !== 'BUTTON') {
//         return
//     }

//     console.log(event.target.nodeName);
// }

// container.addEventListener('click', onClick)

// // добавление кнопок
// let counter = 6;
// const addButton = () => {
//     const btn = document.createElement('button')
//     btn.textContent = `${counter}`
//     btn.type = 'button'

//     container.appendChild(btn)
//     counter += 1
// }

// addBtn.addEventListener('click', addButton)

//--------------------------------------------------------
//ОДИН ИЗ МНОГИХ
//--------------------------------------------------------
// const btnList = document.querySelector('ul')
// .addEventListener('click', listClick)

// let selectedTag = null
// function listClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return
//     }

//     const currentBtn = document.querySelector('.active-btn')

//     if (currentBtn) {
//         currentBtn.classList.remove('active-btn')
//     }

//     const nextClick = event.target
//     nextClick.classList.add('active-btn')
//     selectedTag = nextClick.dataset.value

//     console.log(selectedTag);
// }

//--------------------------------------------------------
//НЕСКОЛЬКО ИЗ МНОГИХ
//--------------------------------------------------------

// const btnList = document.querySelector('ul')
//     .addEventListener('click', onListClick)
// const selectedTags = new Set();

// function onListClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return
//     }
//     const btn = event.target
//     const passed = btn.classList.contains('active-btn')
//     console.log(passed);
//     if (passed) {
//         selectedTags.delete(btn.dataset.value)
//     } else {
//         selectedTags.add(btn.dataset.value)
//     }

//     btn.classList.toggle('active-btn')
//     console.log(selectedTags);
// }

//--------------------------------------------------------
//COLORPICKER
//--------------------------------------------------------
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,180,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,152,0' },
//   { hex: '#ff9800', rgb: '255,235,59' },
//   { hex: '#795548', rgb: '96,125,139' },
// ];

// const colorContainer = document.querySelector('.palette');
// const cardsMarkup = makeColorCardsMarkup(colors);

// colorContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// colorContainer.addEventListener('click', onPaletteClick)

// function makeColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//         <div class="color-card">
//             <div class="color-swatch"
//                 data-hex="${hex}"
//                 data-rgb="${rgb}"
//                 style="background-color: ${hex};"
//                 ></div>
//             <div class="color-meta">
//                     <p>HEX: ${hex}</p>
//                     <p>RGB: ${rgb}</p>
//             </div>
//         </div>
//         `;
//     })
//     .join('');
// }

// function onPaletteClick(event) { 
//     if (!event.target.classList.contains('color-swatch')) {
//         return
//     }

//     const swatchEl = event.target
//     const parentNode = swatchEl.closest('.color-card')

//     removeActiveClass()
//     addColorClass(parentNode)
//     setBodyColor(swatchEl.dataset.hex)
// }

// function setBodyColor(color) {
//   document.body.style.backgroundColor = color
// }

// function removeActiveClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active')

//     if (currentActiveCard) {
//         currentActiveCard.classList.remove('is-active')
//     }
// }

// function addColorClass(card) {
//   card.classList.add('is-active')
// }