import { API_URL, PREFIX_PRODUCT } from './const.js';
import { getData } from './getData.js';

export const renderListProduct = async () => {
    cogetData(`${API_URL}${PREFIX_PRODUCT}`);
};