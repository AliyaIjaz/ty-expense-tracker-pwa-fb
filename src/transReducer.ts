import { ActionType, TransactionsType } from './Types'

const TransactionReducer = (state:TransactionsType, action:ActionType)=>{
 switch(action.type) {
     case "ADD": {
         return {
             ...state, transactions: [action.payload, ...state.transactions]
         }
         
     }
     case "DELETE": {
        return {
            transactions:state.transactions.filter(trans=>trans.id !== action.payload)
        }
    }
     default: {
         return state;
     }
 }
}
export default TransactionReducer;

