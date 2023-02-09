import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/actions/productAction'


export default function Main() {

    const productReducer = useSelector(state=>state.productReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
    }, [])
    

    return (
        <div>
            {JSON.stringify(productReducer)}
        </div>
    )
}
