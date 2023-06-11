import React from 'react';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react'
import { GET__ORDERFORM } from '../graphql/query/get-orderForm';
import { 
    InfoData,
    OrderFormProviderProps,
    ProductsList, 
    useOrderForm 
} from '../typings/useOrderForm';
import { Loading } from '../components/Loading';

export const OrderFormContext = React.createContext<useOrderForm>(
    {} as useOrderForm
)

export function OrderFormProvider({ children }: OrderFormProviderProps) {
    const [productsList, setProductsList] = useState<ProductsList[]>([{ 
        id: 0,
        image: '',
        name: '',
        listPrice: '',
        price: '',
        quantity: 1,
        shipping: {
          delivery: {
              days: '',
              value: '',
          },
          pickup: false,
        },    
    }])
    
    const { data, loading, error} = useQuery<InfoData>(GET__ORDERFORM, {
        variables: { input: {
            orderFormId:'c7eb7303-c53f-417d-8d51-cce67e5959e1'
        }} 
    })
    function insertInitialProductQuantity(products: ProductsList[]){       
        const productListWithInitialQuantity = products.map((product: ProductsList) => {
            return { ...product, quantity: 1}
        })        
        setProductsList(productListWithInitialQuantity)
    }

    useEffect(() => {
        if(!data) return
        const products: ProductsList[] = data.orderForm.items
        insertInitialProductQuantity(products)
      
    },[data && !productsList.length]);

    if (error) {
      alert(`Error! ${error}`);
    }
    
    return ( 
        <OrderFormContext.Provider 
            value={{
                productsList, 
                setProductsList
            }}>
            {loading ? <Loading /> : children}
        </OrderFormContext.Provider>
    )
}