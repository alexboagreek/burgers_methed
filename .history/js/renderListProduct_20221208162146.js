import { API_URL, PREFIX_PRODUCT } from './const';
import { getData } from './getData.js';

export const renderListProduct = () => {
    getData(`${API_URL}${PREFIX_PRODUCT}`);
};