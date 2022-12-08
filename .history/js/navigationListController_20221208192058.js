
import { navigationList } from './elements.js';

export const navigationListController = () => {
    navigationList.addEventListener('click', event => {
        const categoryItem = event.target.closest('.navigation__button');

        if (!categoryItem) {
            
        }
    });
};