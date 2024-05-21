import { PRODUCT_LIST, PRODUCT_SEARCH } from "./Constant"

export const productListing = () => {
    return {
        type: PRODUCT_LIST
    }
}

export const productSearch=(query)=>{
    return{
        type:PRODUCT_SEARCH,
        query
    }
}