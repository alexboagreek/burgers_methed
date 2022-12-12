
import { modalDeliveryForm } from './elements.js';
import { getCart } from './cart.js';

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
        const formData = new FormData(modalDeliveryForm);
        const data = Object.fromEntries(formData);
        data.order = getCart
    });
};