import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/actions/productAction'
import {Card, CardContent, CardActions, Button} from '@mui/material'
import { addProductToBucket } from '../store/actions/bucketActions'

export default function Main() {

    const productReducer = useSelector(state=>state.productReducer)
    const bucketReducer = useSelector(state=>state.bucketReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
    }, [])
    

    return (
        <div>
            {JSON.stringify(productReducer.products)}
            <p>{JSON.stringify(bucketReducer)}</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>{productReducer.products&&productReducer.products.map((product)=>{
                return (
                    <Card style={{width: "50%"}}>
                        <CardContent>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>{
                                dispatch(addProductToBucket(product))
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
