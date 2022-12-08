import { API_URL, PREFIX_PRODUCT } from './const.js';
import { getData } from './getData.js';

export const renderListProduct = async () => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
};