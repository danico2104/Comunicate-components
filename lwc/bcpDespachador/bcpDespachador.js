import { LightningElement, api } from 'lwc';

export default class BcpDespachador extends LightningElement {
    @api
    myData;
    //bubbles - transferencia por burbujeo

    handleDispatchEvent() {
        // Crea un nuevo objeto de evento
        const event = new CustomEvent('myEvent', {
        detail: {
            myData: this.myData
        },
        bubbles: true,
        composed: true
        });

    // Dispatch the event
    this.dispatchEvent(event);
    console.log('*** Evento enviado');
    }
}