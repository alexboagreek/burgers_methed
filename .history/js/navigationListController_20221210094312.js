import { catalogTitle, navigationList, navigationListItems } from './elements.js';

// переключение класса активности в меню и названия активной категории/

export const navigationListController = (callback) => {
    navigationList.addEventListener('click', event => {
        const categoryItem = event.target.closest('.navigation__button');

        if (!categoryItem) return;

        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('navigation__button_active');
                catalogTitle.textContent = item.textContent;
                callback(item.CDATA_SECTION_NODE.);
            } else {
                item.classList.remove('navigation__button_active');
            }
        });
    });
};