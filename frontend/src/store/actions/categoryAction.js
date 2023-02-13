import {categoryConstant} from '../constants/categoryConstants'
import axios from 'axios'

export const getAllCategories = ()=>{
    return async dispatch=>{
        dispatch({type: categoryConstant.CATEGORY_ALL_GET_REQUEST})

        try{
            axios.get('http://localhost:3000/categories/get').then(result=>{
                if(result.status==200){
                    let categoryList = []
                    let subCategories = []
                    result.data.categories.forEach(category=>{
                        if(category.parentId){
                            let isFoundParent = false
                            categoryList.forEach(tempCategory=>{
                                if(tempCategory._id == category.parentId._id){
                                    isFoundParent = true
                                    if(tempCategory.children){
                                        tempCategory.children.push(category)
                                    }
                                    else{
                                        tempCategory.children = []
                                        tempCategory.children.push(category)
                                    }
                                }
                            })
                            if(!isFoundParent){
                                
                                subCategories.push(category)
                            }
                        }
                        else{
                            categoryList.push(category)
                        }
                    })
                    dispatch({type: categoryConstant.CATEGORY_ALL_GET_SUCCESS, payload: {categoryList, subCategories}})
                }
                else{
                    dispatch({type: categoryConstant.CATEGORY_ALL_GET_FAILURE, error: result.data.error})
                }
            })
        }
        catch(e){
            dispatch({type: categoryConstant.CATEGORY_ALL_GET_FAILURE, error: e})
        }
    }
}