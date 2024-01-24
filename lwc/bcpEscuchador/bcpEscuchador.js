import { LightningElement, api, track } from 'lwc';

export default class BcpEscuchador extends LightningElement {

    @api myData;
    @track status;

    handleDispatchEvent(event) {
        console.log('* Evento recibido:', event.detail);
        this.status = "Caso exitoso - recibido de lwc Despachador";
        console.log('* status: ' + this.status);
    }

    connectedCallback() {
        this.status = 'En espera'; 
        console.log('* Estado inicial: ' + this.status);
        document.addEventListener('myEvent', this.handleDispatchEvent.bind(this));
    }



}