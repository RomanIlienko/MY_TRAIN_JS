// const boxEl = document.querySelector('.js-box');
// console.log(boxEl);

//--------HOVER через JS--------------------------------------------
// boxEl.addEventListener('mouseenter', onMouseEnter)
// boxEl.addEventListener('mouseleave', onMouseLeave)

// function onMouseEnter(event) {
//     const mouseEvent = event.currentTarget;
//     mouseEvent.classList.add('box--active');
// // console.log(mouseEvent);
// }

// function onMouseLeave(event) {
//     const mouseEvent = event.currentTarget;
//     mouseEvent.classList.remove('box--active');
    // console.log(mouseEvent);
// }
//--------HOVER через JS--------------------------------------------

// boxEl.addEventListener('mousemove', onMouseMove)
// boxEl.addEventListener('mouseover', onMouseOver)
// boxEl.addEventListener('mouseout', onMouseOut)

// function onMouseOver(event) {
//     const mouseEvent = event.currentTarget;
//     mouseEvent.classList.add('box--active');
    // mouseEvent.classList.remove('box--active');
// console.log(mouseEvent);
// }

// function onMouseOut(event) {
//     const mouseEvent = event.currentTarget;
//     mouseEvent.classList.remove('box--active');
    // mouseEvent.classList.add('box--active');
    
//     console.log(mouseEvent);
// }

// function onMouseMove(event) {
    // const mouseEvent = event.currentTarget;
//     console.log(event);

// }

//-----------------------------------------------------------------
//MODAL WINDOW
//-----------------------------------------------------------------
// const openButton = document.querySelector('button')
// const body = document.querySelector('body')
// const backdrop = document.querySelector('.js-backdrop')
// const closeButton = document.querySelector('[data-action="close-modal"]');

// const openModalClick = () => {
//     window.addEventListener('keydown', closeModalByEscape)
//     body.classList.add('show-modal')
// }

// const closeModalClick = () => {
//     window.removeEventListener('keydown', closeModalByEscape)
//     body.classList.remove('show-modal')
    
// }

// const closeModalOnBackdropClick = (event) => {
//     if (event.currentTarget === event.target) {
//     //event.currentTarget - текущее место расположения бэкдропа
//     //event.target - текущее место клика мышкой
//     body.classList.remove('show-modal')
//     }
// }

// const closeModalByEscape = (event) => {
//     if (event.code === 'Escape') {
//         body.classList.remove('show-modal')
//     }
// }

// openButton.addEventListener('click', openModalClick)
// closeButton.addEventListener('click', closeModalClick)
// backdrop.addEventListener('click', closeModalOnBackdropClick)

//-----------------------------------------------------------------------------

// const myList = document.querySelector('.train-list')
// console.log(myList);

// myList.insertAdjacentHTML('beforeend' , '<div><h1>HEllo Vasya</h1><a href="./index.html">Иди<span>Домой</span></a></div>')

//-----------------------------------------------------------------------------
// СЛУШАТЕЛИ НА КНОПКАХ. TOGGLE
//-----------------------------------------------------------------------------

// const wrapperDiv = document.querySelector('div')
// // console.log(wrapperDiv);
// const button = document.querySelector('.button')
// const buttonClose = document.querySelector('.button-close')
// // console.log(buttonClose);
// console.log(button);

// const changeOutline = () => {
    
//     // wrapperDiv.classList.add('button-wrap')
//     // wrapperDiv.classList.remove('button-wrapper')
//     wrapperDiv.classList.toggle('button-wrapper')
//     // button.style.background = 'blue'
//     button.classList.toggle('button-change')

// }

// const changeOutlineBack = () => {
//     // wrapperDiv.classList.remove('button-wrap')
//     // wrapperDiv.classList.add('button-wrapper')
//     wrapperDiv.classList.toggle('button-wrap')
//     buttonClose.classList.toggle('button-change-close')
// }

// button.addEventListener('click', changeOutline)
// buttonClose.addEventListener('click', changeOutlineBack)

//-----------------------------------------------------------------------------
// ПОДСВЕТКА КАЖДОЙ ВЫБРАННОЙ КНОПКИ
//-----------------------------------------------------------------------------

// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();
  
//   const target = event.target;
//     console.log("event target: ", target);
//     console.log(target.nodeName);

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }


// function setActiveLink(nextActiveLink) {
//     const currentActiveLink = nav.querySelector("a.active");
//     console.log(currentActiveLink);

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }
