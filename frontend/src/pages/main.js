import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/actions/productAction'
import {Card, CardContent, CardActions, Button} from '@mui/material'
import { addProductToBasket } from '../store/actions/basketActions'
import { useNavigate } from 'react-router-dom'


export default function Main() {

    const productReducer = useSelector(state=>state.productReducer)
    const basketReducer = useSelector(state=>state.basketReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getAllProducts())
    }, [])
    

    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>{productReducer.products&&productReducer.products.map((product)=>{
                return (
                    <Card style={{width: "50%"}} onClick={()=>{
                        navigate(`../products/details-page/${product._id}`)
                    }}>
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
