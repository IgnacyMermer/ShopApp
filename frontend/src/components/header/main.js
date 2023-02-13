import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../store/actions/categoryAction'
import './main.css'


export default function Header() {

  const categories = useSelector(state=>state.categoryReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCategories())
    console.log(categories)
  }, [])

  return (
    <div className='header'>
      <span>Header</span>
      <p style={{color: 'white'}}>{JSON.stringify(categories)}</p>
    </div>
  )
}
