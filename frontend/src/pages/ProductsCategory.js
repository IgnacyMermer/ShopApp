import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getProductsInCategory } from '../store/actions/productAction'


export default function ProductsCategory() {

  const dispatch = useDispatch()
  const productReducer = useSelector(state=>state.productReducer)
  const location = useLocation();

  useEffect(()=>{
    console.log(location.pathname)
    const categoryId = location.pathname.split('/')[location.pathname.split('/').length-1]
    dispatch(getProductsInCategory(categoryId))
  }, [location.pathname])


  return (
    <div>
        <p>{JSON.stringify(productReducer)}</p>
    </div>
  )
}
