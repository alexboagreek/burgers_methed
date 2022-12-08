
import { navigationList, navigationListItems } from './elements.js';

export const navigationListController = () => {
    navigationList.addEventListener('click', event => {
        const categoryItem = event.target.closest('.navigation__button');

        if (!categoryItem) return;

        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('navigation__button_active');
            } else {
                item.classList.add('navigation__button_active');
            }
        });
    });
};