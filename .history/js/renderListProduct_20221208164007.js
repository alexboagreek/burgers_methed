import { API_URL, PREFIX_PRODUCT } from './const.js';
import { getData } from './getData.js';

export const renderListProduct = async () => {
    getData(`${API_URL}${PREFIX_PRODUCT}`);
};