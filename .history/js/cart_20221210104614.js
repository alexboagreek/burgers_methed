//** получение данных корзины через локалстораж */

const getCart = () => {
    const cartList = localStorage.getItem('cart');
    if (cartList) {
        return JSON.parse(cartList);
    } else {
        return [];
    }
};


//** получение данных корзины через локалстораж*/
const updateCartList = (cartList) => {
    localStorage.setItem('cart', JSON.stringify(cartList));
};