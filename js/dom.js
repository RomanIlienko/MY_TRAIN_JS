import impProducts from './trainObjects.js';
// console.log(impProducts);

// const header = document.createElement('h2')
// // console.log(noHeader);
// header.textContent = 'HELLO BITCHES'
// console.log(header);

// const imgTag = document.createElement('a')
// imgTag.setAttribute('src','https://www.google.com/search?q=%D0%B4%D0%B6%D0%B8%D0%BC+%D0%BB%D0%BE%D1%83%D0%BB%D0%B5%D1%81%D1%81+%D0%B8%D0%B4%D0%B8+%D1%82%D1%83%D0%B4%D0%B0+%D0%B3%D0%B4%D0%B5+%D1%81%D1%82%D1%80%D0%B0%D1%88%D0%BD%D0%BE&rlz=1C1SQJL_ruUA944UA944&sxsrf=ALeKk02cqYgOsi-x_aMW0KcjrGyYT4HwxQ%3A1627506479210&ei=L8cBYcapDOyRrgS0pxs&gs_ssp=eJzj4tVP1zc0TM8tryooSi80YPSyvbDlwrYLOy7sUbiw-8K-i81AcuvFxouNCkCxLRd2KFxsAoptubBB4cJmILVVASjXdLHhwoaLHRf2XtgHAJQJLwo&oq=%D0%94%D0%B6%D0%B8%D0%BC+%D0%9B%D0%BE%D1%83%D0%BB%D0%BB%D0%B5%D1%81+&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCC4QDRCTAjIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDToHCAAQsAMQCjoNCC4QsAMQyAMQChCTAjoKCC4QsAMQyAMQCkoFCDgSATFKBAhBGAFQkExYkExg4VtoAXAAeACAAWOIAb0BkgEBMpgBAKABAaoBB2d3cy13aXrIAQvAAQE&sclient=gws-wiz' )
// imgTag.setAttribute('alt', 'ссылка на книгу')
// console.log(imgTag);
// const list = document.createElement('ul')
// list.appendChild('li')
// console.log(list);

//--------------------------------------------------------------------------------

// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   // Предотвращаем поведение по умолчанию
//   event.preventDefault();

//   const login = loginInput.value.trim();
//   const password = passInput.value.trim();
  
//   if(login === '' || password === '') {
//     return alert('Пожалуйста введите валидную информацию!')
//   }

//   form.reset();
  
//   alert(`
//     Спасибо за регистрацию!
//     Логин: ${login} 
//     Пароль: ${password}
//   `);
// }

//--------------------------------------------------------------------------------

// const heroSect = document.querySelector('section')
// // console.log(heroSect);
// const headerEl = document.querySelector('h1');
// // console.log(headerEl);
// const img = document.querySelector('.hero-image')
// // console.log(img);
// const button = document.querySelector('.magicBtn')
// // console.log(button);
// const firstElCh = heroSect.firstElementChild
// // console.log(firstElCh);
// const listEl = document.querySelector('.list');
// console.log(listEl);
// const listChildren = listEl.lastElementChild
// // console.log(listChildren);
// console.log(listEl.children);

// button.addEventListener('click', () => {
//     img.alt = 'Chester 2'
//     img.src = 'https://tntmusic.ru/media/content/article/2017-10-26_10-46-54__fb438238-ba3a-11e7-bafd-550efc5bf925.jpg'
//     headerEl.textContent = 'Miss you bro'
//     button.textContent = 'button'
//     listChildren.textContent = 'Alert'
// })


//--------------------------------------------------------------------------------
// CREATE ELEMENT
//--------------------------------------------------------------------------------

// const header = document.createElement('h1')
// header.textContent = 'This is Header'
// header.classList.add('header-title')
// // console.log(header);
// const list = document.createElement('ul')
// list.classList.add('header-list')
// // console.log(list);
// const listEl = document.createElement('li')
// listEl.classList.add('list-items')
// // console.log(listEl);
// const headerImg = document.createElement('img')
// headerImg.classList.add('header-img')
// headerImg.src = 'https://i.ytimg.com/an_webp/aqXdwAgRhns/mqdefault_6s.webp?du=3000&sqp=CIuwpIgG&rs=AOn4CLC7sc6x8ph6A2ipzrGB3eNSdp1d1g'
// headerImg.alt = 'GIF'
// // console.log(headerImg)
// list.appendChild(listEl)
// listEl.appendChild(headerImg)

// const hero = document.querySelector('.hero-wrapper')
// // console.log(hero);
// hero.appendChild(header)
// hero.appendChild(list)
// // console.log(hero);

// const mainEl = document.querySelector('.main-theme')
// console.log(mainEl);

//--------------------------------------------------------------------------------

// const mainElTitle = document.createElement('h1')
// mainElTitle.textContent = 'First one'
// mainElTitle.classList.add('main-title')
// // console.log(mainElTitle);
// const mainList = document.createElement('ul')
// mainList.classList.add('list')
// // console.log(mainList);
// const listEl = document.createElement('li')
// listEl.classList.add('list-element')
// // console.log(listEl);
// const imgEl = document.createElement('img')
// imgEl.classList.add('list-img')
// imgEl.src = 'https://znaj.ua/crops/4cadeb/360x0/1/0/2017/07/29/609980610.jpg'
// imgEl.alt = 'Red'
// // console.log(imgEl);
// listEl.appendChild(imgEl)
// mainList.appendChild(listEl)
// mainElTitle.appendChild(mainList)
// console.log(mainElTitle);


//--------------------------------------------------------------------------------
//CREATE COLLECTION OF ELEMENTS
//--------------------------------------------------------------------------------

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607DBB' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F5185' }
// ];

// const item = colorPickerOptions[0]

// const colorPickerEl = document.querySelector('.js-color-picker')
// console.log(colorPickerEl);

// const makeColorPickerOptions = item => {
//     return item.map(item => {
//     const button1 = document.createElement('button')
//     button1.textContent = item.label
//     button1.classList.add('firstBtn')
//     button1.style.backgroundColor = item.color
//     // console.log(button1);
//     button1.style.borderRadius = '5px'

//         return button1
//     })
// };
// const elements = makeColorPickerOptions(colorPickerOptions)
// colorPickerEl.append(...elements)

//--------------------------------------------------------------------------------
//СОЗДАНИЕ КОЛЛЕКЦИИ ТОВАРОВ
//--------------------------------------------------------------------------------
// const product = {
//     name: 'Wolkswagen Sirocco',
//     description: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации.',
//     price: 7000,
//     available: true,
//     onSale: true
// }

// const productsEl = document.createElement('article')
// productsEl.classList.add('product')
// // console.log(productsEl);
// const productNameEl = document.createElement('h2')
// productNameEl.textContent = product.name
// productNameEl.classList.add('product__name')
// // console.log(productNameEl);
// const productDescrEl = document.createElement('p')
// productDescrEl.textContent = product.description
// productDescrEl.classList.add('product__description')
// // console.log(productDescrEl);
// const productPriceEl = document.createElement('p')
// productPriceEl.textContent = `Цена: ${product.price}`
// productPriceEl.classList.add('product__price')
// // console.log(productPriceEl);

//--------------------------------------------------------------------------------

// const makeProductCard = ({ name, description, price}) => {
//     const productsEl = document.createElement('article');
//     productsEl.classList.add('product');
//  // console.log(productsEl);
//     const productNameEl = document.createElement('h2');
//     productNameEl.textContent = name;
//     productNameEl.classList.add('product__name');
//  // console.log(productNameEl);
//     const productDescrEl = document.createElement('p');
//     productDescrEl.textContent = description;
//     productDescrEl.classList.add('product__description');
//  // console.log(productDescrEl);
//     const productPriceEl = document.createElement('p');
//     productPriceEl.textContent = `Цена: ${price}`;
//     productPriceEl.classList.add('product__price');
//  //  console.log(productPriceEl.innerHTML);
//  //  console.log(productPriceEl.textContent);

//     productsEl.append(productNameEl, productDescrEl, productPriceEl);
//  //  console.log(productsEl);
    
//     return productsEl
// }
//  // console.log(makeProductCard(impProducts[0]));

// const readyElements = impProducts.map(makeProductCard)
// // console.log(readyElements);
// const container = document.querySelector('.js-products')
// // console.log(container);

// container.append(...readyElements)

