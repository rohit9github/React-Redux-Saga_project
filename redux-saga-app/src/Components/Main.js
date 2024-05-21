import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../Redux/Action';
import { productListing } from '../Redux/ProductAction';

function Main() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.log(data)
    const product = {
        name: "phone",
        price: 10000,
        quantity: 1,
        totalPrice: 10000,
        id: 1,
    }


    return (
        <>
            <div>
                <button onClick={() => dispatch(addToCart(product))} >ADD To Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(removeToCart(product.name))} >Remove To Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(emptyCart(product))} >Empty To Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(productListing())} >Get Product List</button>
            </div>
            <div className='productContainer'>
                {data.map((v, i) => {
                    return (
                        <div className='product' key={i}>
                            <img src={v.photo} />
                            <div className='productName'>Name :- {v.name}</div>
                            <div className='productPrice'>Price :- {v.price}</div>
                            <div className='productQuantity'>Quantity :- {v.quantity}</div>
                            <div className='productTotalPrice'>Category :- {v.category}</div>
                            <div className='productId'>Brand :- {v.brand}</div>
                            <div>
                                <button>Add To Cart</button>  ||   
                                <button>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Main;
