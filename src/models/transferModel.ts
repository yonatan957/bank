import { v4 } from "uuid"

export default class TransferModel{
    public transferId:string;
    public created_at:Date;
    constructor(
        public account:number,
        public conductorId:string,
        public receiverId:string,
        public amount:number
    ){
        this.transferId = v4()
        this.created_at = new Date()
    }
}