import { LightningElement } from 'lwc';

export default class BcpEventoPrueba extends LightningElement {

    handleInputChange(event) {
        const inputValue = event.target.value;
        console.log('Valor Cambiado:', inputValue);
    }

    handleButtonClick() {
        console.log('Botón Click');
    }

}