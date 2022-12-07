import { User } from "../model/User";

export function performPurchase(user:User,value:number){
if(user.balance >= value){
    return{
        ...user,
        balance: user.balance - value
    }
}
}