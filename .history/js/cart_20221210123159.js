import { catalogList, modalProductBtn } from "./elements.js";

//** получение данных корзины через локалстораж */

const getCart = () => {
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

        modalProductBtn.addEventListener('click', ()=>)
    });
};

export const cartInit = () => {
    cartController();
};