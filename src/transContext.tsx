
import { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';
import { TransObjType } from './Types'
import { TransactionProviderProps } from './Types'


const contextState= {
    transactions:[{desc: "Cash", amount: 10, id:0}],
    addTransaction: (Transaction:TransObjType)=>{},
    delTransaction:(id:number)=>{}
}

export const TransactionContext = createContext(contextState);


export const TransactionProvider = ({children}:TransactionProviderProps) =>{

    let [state, dispatch] = useReducer(TransactionReducer, contextState);
     
    function addTransaction(transObj:TransObjType){
        dispatch({
           type: "ADD",
           payload: {
               amount: transObj.amount,
               desc: transObj.desc,
               id: transObj.id
           }, 
        })

    }

    function delTransaction(id:number){
        dispatch({
           type: "DELETE",
           payload: id
        })

    }
    
     
    return(
        <TransactionContext.Provider value = {{
            transactions:state.transactions,
            addTransaction:addTransaction,
            delTransaction:delTransaction
        }}>
          {children}
        </TransactionContext.Provider>
    )
    
    
}
