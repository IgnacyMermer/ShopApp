import {categoryConstant} from '../constants/categoryConstants'


const initialState = {
    categories: [],
    loading: false,
    error: null
}

const categoryReducer = (state=initialState, action)=>{
    switch(action.type){
        case categoryConstant.CATEGORY_ALL_GET_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null
            }
            break;
        case categoryConstant.CATEGORY_ALL_GET_SUCCESS:
            let categoryList = action.payload.categoryList
            let subCategories = action.payload.subCategories
            
            while(subCategories.length!=0){
                for(let i=0; i<subCategories.length; i++){
                    const category = subCategories[i]
                    categoryList.forEach(tempCategory=>{
                        if(tempCategory._id == category.parentId._id){
                            if(tempCategory.children){
                                tempCategory.children.push(category)
                            }
                            else{
                                tempCategory.children = []
                                tempCategory.children.push(category)
                            }
                            subCategories.splice(subCategories.indexOf(category), 1)
                            i--
                            
                        }
                        else if(tempCategory.children){
                            const returnedValue = checkIfChildren(tempCategory.children, category)
                            if(returnedValue){
                                subCategories.splice(subCategories.indexOf(category), 1)
                                i--
                            }
                        }
                    })
                }
            }

            
            state = {
                ...state,
                categories: action.payload,
                loading: false,
                error: null
            }
            break;
        case categoryConstant.CATEGORY_ALL_GET_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
    }
    return state
}

const checkIfChildren = (children, category)=>{
    let myReturnValue = false
    children.forEach(tempCategory=>{
        if(tempCategory._id == category.parentId._id){
            if(tempCategory.children){
                tempCategory.children.push(category)
            }
            else{
                tempCategory.children = []
                tempCategory.children.push(category)
            }
            myReturnValue = true
        }
        else if(tempCategory.children){
            myReturnValue = checkIfChildren(tempCategory.children, category)
        }
    })
    return myReturnValue
}

export default categoryReducer
