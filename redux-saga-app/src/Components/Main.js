import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../Redux/Action';

function Main() {

    const dispatch = useDispatch();
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
        </>
    );
}

export default Main;
