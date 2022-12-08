import { API_URL, PREFIX_PRODUCT } from './const';
import { getData } from './getData.js';
 
const renderListProduct = () => {
    getData(`{API_URL} + PREFIX_PRODUCT`);
};