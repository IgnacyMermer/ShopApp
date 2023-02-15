import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { basketConstants } from '../store/constants/basketConstants'


export default function Basket() {

  const dispatch = useDispatch()
  const basketReducer = useSelector(state=>state.basketReducer)


  return (
    <div>
        <h2>Twój koszyk</h2>
        <div>
          {
            JSON.stringify(basketReducer)
          }
          {
            basketReducer.products&&basketReducer.products.map(product=>{
              return(
                <p>
                  <div>
                    <span>{product.name}</span>
                    <span>Cena: {product.quantity*product.price}</span>
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
    </div>
  )
}
