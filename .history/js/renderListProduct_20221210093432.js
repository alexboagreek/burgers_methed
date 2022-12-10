import { API_URL, PREFIX_PRODUCT } from './const.js';
import { catalogList } from './elements.js';
import { getData } from './getData.js';
import { createCardProduct } from './createCardProduct.js';

// рендер списка бургеров на странице /

export const renderListProduct = async (category = '') => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`);

    const listCard = listProduct.map(createCardProduct); 
    catalogList.append(...listCard);

};
