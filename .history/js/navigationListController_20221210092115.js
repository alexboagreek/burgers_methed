import { navigationList, navigationListItems } from './elements.js';

// переключение класса активности в меню /

export const navigationListController = () => {
    navigationList.addEventListener('click', event => {
        const categoryItem = event.target.closest('.navigation__button');

        if (!categoryItem) return;

        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('navigation__button_active');
                catal
            } else {
                item.classList.remove('navigation__button_active');
            }
        });
    });
};