
import { modalDeliveryForm } from './elements.js';
import { getCart } from './../.history/js/cart_20221212085235';

export const orderController = (getCart) => {
    modalDeliveryForm.addEventListener('change', () => {
        if (modalDeliveryForm.format.value === 'pickup') {
            modalDeliveryForm['address-info'].classList
                .add('modal-delivery__fieldset-input_hide');
        }

        if (modalDeliveryForm.format.value === 'delivery') {
            modalDeliveryForm['address-info'].classList
                .remove('modal-delivery__fieldset-input_hide');
        }
    });

    modalDeliveryForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });
};