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

const openModal = (product) => {
 
  modalProductTitle.textContent = product.title;
  modalProductImage.src = product.image;

  ingredientsList.textContent = "";

  // for (let i = 0; i < product.ingredients.length; i++) {
  //   const li = document.createElement("li");
  //   li.classList.add("ingredients__item");
  //   li.textContent = product.ingredients[i];
  //   ingredientsList.append(li);
  // }



  const ingredientsListItems = product.ingredients.map((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredients__item");
    li.textContent = item;
    return li;
  });

  ingredientsList.append(...ingredientsListItems);



  modalProductDescription.textContent = product.description;
  ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
  modalProductPriceCount.textContent = product.price;

  modalProduct.classList.add("modal_open");
};

// рендер карточки бургера /

const createCardProduct = (product) => {
  const li = document.createElement("li");
  li.classList.add("catalog__item");

  li.innerHTML = `
  <article class="product">
    <img class="product__image" src="${product.image}" alt="${product.title}">

    <p class="product__price">${product.price}<span class="currency">₽</span></p>

    <h3 class="product__title">
      <button class="product__detail">${product.title}</button>
    </h3>

    <p class="product__weight">${product.weight}г</p>

    <button class="product__add">Добавить</button>
  </article>`;

  return li;

};

catalogList.textContent = '';

const item = createCardProduct(burgerMax);

catalogList.append(item);

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
