import React from "react"

export type TransObjType = {
    desc: string, 
    amount: number
    id:number
}

export type TransactionsType = {
    transactions: TransObjType[]
}


type PayloadType= {
    type:'ADD',
    payload: {
        desc:string,
        amount:number
        id:number
    }
}
type PayloadId = {
type:'DELETE',
payload:number
}

export type ActionType = PayloadType | PayloadId

export type TransactionProviderProps = {
    children:React.ReactNode
}