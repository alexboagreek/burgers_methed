// console.log('Working...');
const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');

catalogList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.product__detail') || target.closest('.product__image') )
})