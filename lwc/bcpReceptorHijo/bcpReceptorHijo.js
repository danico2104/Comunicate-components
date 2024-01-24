import { LightningElement, track, api } from 'lwc';

export default class BcpReceptorHijo extends LightningElement {
    @track Mensaje;
    @api
    changeMessage(strMensaje){
        this.Mensaje = strMensaje;
    }
}