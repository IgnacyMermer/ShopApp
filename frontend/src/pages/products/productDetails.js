import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProductDetails } from '../../store/actions/productAction';



export default function ProductDetails() {

  const location = useLocation();
  const productReducer = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()


  useEffect(()=>{
    const productId = location.pathname.split('/')[location.pathname.split('/').length-1]
    dispatch(getProductDetails(productId))
  }, [location])
  
  return (
    <div>
        <div>
          <h2>Szczegóły</h2>
          <h3>{productReducer.productDetails.name}</h3>
          <h4>Cena: {productReducer.productDetails.price} zł</h4>
          <h4>Ilość dostępnych sztuk: {productReducer.productDetails.quantity}</h4>
          <h5>Opis: {productReducer.productDetails.description}</h5>
          <p>{JSON.stringify(productReducer.productDetails)}</p>
        </div>
    </div>
  )
}
