import { v4 } from "uuid"
import TransferModel from "./transferModel"
import CreditDebit from "./creditDebit";

export default class ClientModel{

    public id:string;
    public transfers: TransferModel[];
    public creditDebits: CreditDebit[];

    constructor(
        public name:string,
        public branch:number,
        public accountNumber:number,
        public balance:number,
    ){
        this.id = v4();
        this.transfers = [];
        this.creditDebits = [];
    }
}