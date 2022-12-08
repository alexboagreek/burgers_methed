import { API_URL, PREFIX_PRODUCT } from './const.js';
import { catalogList } from './elements.js';
import { getData } from './getData.js';
catalogList
// рендер бургеров на странице /

export const renderListProduct = async () => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
};