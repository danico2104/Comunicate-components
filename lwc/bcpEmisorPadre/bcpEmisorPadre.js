import { LightningElement } from 'lwc';

export default class BcpEmisorPadre extends LightningElement {
    handleChageEvent(event){
        this.template.querySelector('c-bcp-receptor-hijo').changeMessage(event.target.value);
    }
}