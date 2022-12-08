import { API_URL, PREFIX_PRODUCT } from './const.js';
import { getData } from './getData.js';

export const renderListProduct = async () => {
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`);
};