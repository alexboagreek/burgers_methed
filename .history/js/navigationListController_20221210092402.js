import { catalogTitle, navigationList, navigationListItems } from './elements.js';

// переключение класса активности в меню и названия активной категории/

export const navigationListController = () => {
    navigationList.addEventListener('click', event => {
        const categoryItem = event.target.closest('.navigation__button');

        if (!categoryItem) return;

        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('navigation__button_active');
                catalogTitle.textContent = item.textContent;
            } else {
                item.classList.remove('navigation__button_active');
            }
        });
    });
};