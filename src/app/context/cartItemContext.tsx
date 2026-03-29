"use client"

import getLoggedUserCart from '@/Api/cartAction/getLoggedUserCart.Api';
import { createContext, useEffect, useState } from 'react';

export const cartItemContext = createContext<null|any>(null);


export function CartContextProvider({children}:{children:React.ReactNode}){
const [dataDetails, setDataDetails] = useState(null);
    async function getDetails(){
        const res = await getLoggedUserCart()
        setDataDetails(res.numOfCartItems)
        
    }
    useEffect(() => {
        getDetails()
    }, []);
    return(
        <cartItemContext.Provider value={{dataDetails, setDataDetails}}>
            {children}
        </cartItemContext.Provider>
    )
}