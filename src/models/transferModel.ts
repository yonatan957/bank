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

// export default class TransferModel{
//     public id:string
//     constructor(
//         public name:string,
//         public branch:number,
//         public accountNumber:number,
//         public balance:number,
//     ){
//         this.id = v4()
//     }
// }