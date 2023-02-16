import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function OrderPage() {

    const dispatch = useDispatch()
    const basketReducer = useSelector(state=>state.basketReducer)

    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [city, setCity] = useState('')
    const [postalNumber, setPostalNumber] = useState('')

    return (
        <div>
            {JSON.stringify(basketReducer.products)}
            <h2>Produkty:</h2>
            <div>
                {
                    basketReducer.products&&basketReducer.products.map(product=>{
                        return(
                            <div>
                                <span>{product.name}{'\t'}-</span>
                                <span>{'\t'}{product.quantity*product.price}{'\t'}zł</span>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h4>Dane dostawy:</h4>
                <p><TextField label='Ulica' value={street} onChange={e=>{
                    setStreet(e.target.value)
                }}/></p>
                <p><TextField label='Numer domu' value={houseNumber} onChange={e=>{
                    setHouseNumber(e.target.value)
                }}/></p>
                <p><TextField label='Miasto' value={city} onChange={e=>{
                    setCity(e.target.value)
                }}/></p>
                <p><TextField label='Kod pocztowy' value={postalNumber} onChange={e=>{
                    setPostalNumber(e.target.value)
                }}/></p>
            </div>
        </div>
    )
}
