import { PREFIX_PRODUCT } from './const';
import { getData } from './getData.js';
import { API_URL } from './../.history/js/const_20221208132422';
 
const renderListProduct = () => {
    getData(API_URL + PREFIX_PRODUCT)
}