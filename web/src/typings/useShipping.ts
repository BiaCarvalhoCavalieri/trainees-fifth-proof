import { Dispatch, SetStateAction } from 'react'

export type ShippingType = {
    type: string,
    title: string,
    info: string,
    price: number
}
export type ShippingProps = {
    item: ShippingType,
    shipping: string,
    setShipping: Dispatch<SetStateAction<string>>
    index: number
}