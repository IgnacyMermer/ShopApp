import { Button, Card, CardActions, CardContent } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addProductToBasket } from '../../store/actions/basketActions'
import { getProductsInCategory } from '../../store/actions/productAction'


export default function ProductsCategory() {

  const dispatch = useDispatch()
  const productReducer = useSelector(state=>state.productReducer)
  const location = useLocation();

  useEffect(()=>{
    const categoryId = location.pathname.split('/')[location.pathname.split('/').length-1]
    dispatch(getProductsInCategory(categoryId))
  }, [location.pathname])


  return (
    <div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>{productReducer.productsInCategory&&productReducer.productsInCategory.map((product)=>{
                return (
                    <Card style={{width: "50%"}}>
                        <CardContent>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>{
                                dispatch(addProductToBasket(product))
                            }}>
                                Dodaj do koszyka
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
            </div>
    </div>
  )
}
