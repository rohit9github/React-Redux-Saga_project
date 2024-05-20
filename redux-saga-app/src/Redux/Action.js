
export const addToCart=(data)=>{
    console.log(data)
    return {
        type : "ADD_TO_CART",
        data : data
    }
}

export const removeToCart=(data)=>{
    console.log(data)
    return {
        type : "REMOVE_TO_CART",
        data : data
    }
}

export const emptyCart=(data)=>{
    console.log(data)
    return {
        type : "EMPTY_CART",
    }
}