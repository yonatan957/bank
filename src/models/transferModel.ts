import { v4 } from "uuid"

export default class TransferModel{
    public transferId:string;
    public created_at:Date;
    constructor(
        public account:number,
        public secondClientId:string,
        public amount:number,
        public is_it_acceptance:boolean
    ){
        this.transferId = v4()
        this.created_at = new Date()
    }
}