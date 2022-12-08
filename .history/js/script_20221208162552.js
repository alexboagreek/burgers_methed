import {
  modalProduct,
  catalogList,
} from './elements.js';
import { createCardProduct } from './createCardProduct.js';
import { openModal } from './openModal.js';
import { renderListProduct } from '/.renderListProduct';

const burgerMax = {
  title: "Бургер Макс",
  price: 10000,
  weight: 5000,
  calories: 15000,
  description: "Огромный бургер, сьешь сам или поделись с компанией",
  image: "img/megaburger.jpg",
  ingredients: [
    "Пшеничная булочка",
    "Мега котлета из говядины",
    "Много сыра",
    "Листья салата", 
    "Чипотл",
  ],
};


// рендер бургеров на странице / 

catalogList.textContent = '';

const card = [
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
  createCardProduct(burgerMax),
];

catalogList.append(...card);

// открытие модального окна при клике на название или изображение бургера / 

catalogList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(".product__detail") || target.closest(".product__image")) {
    openModal(burgerMax);
  }

});

// закрытие модального окна по клику на крестик /

modalProduct.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(".modal__close") || target === modalProduct) {
    modalProduct.classList.remove("modal_open");
  }

});


const init = () => {
  renderListProduct();
};

init();