import {ADD_TO_CART} from "./Constant"

export const cartData = (data = [], action) => {
    // if (action.type === ADD_TO_CART) {
    //     console.log(action);
    //     return action.data
    // }
    // else {
    //     return "abc"
    // }

    switch(action.type){
        case ADD_TO_CART:
            console.log(action);
            return action.data
        default:
            return data
    }
}