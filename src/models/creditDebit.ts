import { v4 } from "uuid";

export default class CreditDebit{
    public created_at:Date
    public creditDebitId:string;
    constructor(
        public businessName:string,
        public amount:number,
    ){
        this.created_at = new Date()
        this.creditDebitId = v4()
    }
}