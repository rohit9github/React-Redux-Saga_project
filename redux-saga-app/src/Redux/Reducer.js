import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./Constant"

export const cartData = (data = [], action) => {
   
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action);
            return [action.data, ...data]
        case REMOVE_TO_CART:
            // data.length = data.length ? data.length - 1:[]
            let removeData = data.filter((v,i)=>v.id !== action.data) 
            return [...removeData]
        case EMPTY_CART:
            data = []
            return [...data]
        default:
            return data
    }
}