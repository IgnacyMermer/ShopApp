import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { basketConstants } from '../store/constants/basketConstants'


export default function Basket() {

  const dispatch = useDispatch()
  const basketReducer = useSelector(state=>state.basketReducer)


  return (
    <div>
        <h2>{basketReducer.products.length!=0?'Twój koszyk':'Twój koszyk jest pusty'}</h2>
        <div>
          {
            JSON.stringify(basketReducer)
          }
          {
            basketReducer.products&&basketReducer.products.map(product=>{
              return(
                <p>
                  <div>
                    <span>{product.name}{'\t'}</span>
                    <span>Ilość: {product.quantity}{'\t'}</span>
                    <span>Cena: {product.quantity*product.price} zł{'\t'}</span>
                    <Button onClick={()=>{
                      dispatch({type: basketConstants.REMOVE_PRODUCT_FROM_BASKET, payload: product})
                    }}>
                      Usuń
                    </Button>
                  </div>
                </p>
              )
            })
          }
        </div>
        <div>
          <h3>Kwota całkowita:</h3>
          <h5>{basketReducer.price} zł</h5>
        </div>
        <Button>
          <Link style={{textDecoration: 'none', color: 'black'}} to='../order'>Złóz zamówienie</Link>
        </Button>
    </div>
  )
}
