
import { modalDeliveryForm } from './elements.js';

export const orderController = () => {
    modalDeliveryForm.addEventListener('change', () => {
        if (modalDeliveryForm.format === 'pickup') {
            modalDeliveryForm[address-info].classList
                .add('modal-delivery__fieldset-input_hide');
        }

        if (modalDeliveryForm.format === 'pickup') {
            modalDeliveryForm[address-info].classList
                .add('modal-delivery__fieldset-input_hide');
        }
    });
};