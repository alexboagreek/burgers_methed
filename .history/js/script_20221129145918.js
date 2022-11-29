// console.log('Working...');
const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');

const product = {
    title: 'Бургер Макс',
    price: 10000,
    weight: 5000,
    calories: 15000,
    description: 'Огромный бургер, сьешь сам или поделись с компанией',
    image: 'img/megaburger.jpg',
    ingridients: [
        'Пшеничная '
    ]
}

catalogList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.product__detail') || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open');
    }
});

modalProduct.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.modal__close') || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
});
