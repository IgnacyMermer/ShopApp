import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../store/actions/categoryAction'
import './main.css'
import {Link} from 'react-router-dom'


export default function Header() {

  const categories = useSelector(state=>state.categoryReducer)
  const userReducer = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCategories())
  }, [])

  return (
    <div className='header' style={{display: 'flex'}}>
      <div className='mainCategories'>
        {categories.categories.categoryList&&categories.categories.categoryList.map(category=>{
          return(
            <div className='mainCategory'>
              {category.name}
            </div>
          )
        })}
      </div>
      <div className='signing'>
        <span style={{color: 'white'}}>
          <Link to='../basket' style={{color: 'white', textDecoration: 'none'}}>
            Koszyk
          </Link>
        </span>
        <span style={{color: 'white'}}>
          {!userReducer.loggedIn&&<Link to='../signing' style={{color: 'white', textDecoration: 'none'}}>
            Zaloguj się
          </Link>}
        </span>
      </div>
    </div>
  )
}
