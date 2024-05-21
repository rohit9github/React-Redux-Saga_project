import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../Redux/Action';
import { productListing } from '../Redux/ProductAction';
import { useEffect } from 'react';

function Main() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.log(data)
    useEffect(()=>{
        dispatch(productListing())
    },[])

    return (
        <>
            <div>
                <button onClick={() => dispatch(emptyCart())} >Empty To Cart</button>
            </div>
            <div className='productContainer'>
                {data.map((v, i) => {
                    return (
                        <div className='product-items' key={i}>
                            <img src={v.photo} />
                            <div className='productName'>Name :- {v.name}</div>
                            <div className='productPrice'>Price :- {v.price}</div>
                            <div className='productQuantity'>Quantity :- {v.quantity}</div>
                            <div className='productTotalPrice'>Category :- {v.category}</div>
                            <div className='productId'>Brand :- {v.brand}</div>
                            <div>
                                <button onClick={() => dispatch(addToCart(v))}>Add To Cart</button>  ||   
                                <button onClick={() => dispatch(removeToCart(v.id))} >Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Main;
