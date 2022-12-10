import { catalogList, modalProductBtn, countAmount } from "./elements.js";

//** получение данных корзины через локалстораж */

export const getCart = () => {
    const cartList = localStorage.getItem('cart');
    if (cartList) {
        return JSON.parse(cartList);
    } else {
        return [];
    }
};


//** обновление данных корзины через локалстораж*/

const updateCartList = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList));
};


const addCart = (id, count = 1) => {

};

const removeCart = (id) => {

};

const cartController = () => {
    catalogList.addEventListener('click', ({ target }) => {
        if (target.closest('.product__add')) {
            addCart(target.closest('.product').dataset.idProduct);
        }
    });

    modalProductBtn.addEventListener('click', () => {
        addCart(
           modalProductBtn.dataset.idProduct,
           parseInt(countAmount.textContent),
       );
    });
}; 


import { getCart } from './cart.js';

export const renderCartList = async () => {
    const cartList = getCart();
};
export const cartInit = () => {
    cartController();
};