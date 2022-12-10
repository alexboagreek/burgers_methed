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

const renderCartList = async () => {
    const cartList = getCart();
};

//** обновление данных корзины через локалстораж*/

const updateCartList = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList));
    renderCartList();
};


const addCart = (id, count = 1) => {
    const cartList = getCart();
    const product = cartList.find((item) => item.id = id);
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

export const cartInit = () => {
    cartController();
    renderCartList();
};