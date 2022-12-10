import { catalogList } from "./elements.js";

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
    catalogList.addEventListener('click', () => {
        
    })
};

export const cartInit = () => {
    cartController();
};