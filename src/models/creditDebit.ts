export default class CreditDebit{
    public created_at:Date
    constructor(
        public businessName:string,
        public amount:number,
    ){
        this.created_at = new Date()
    }
}