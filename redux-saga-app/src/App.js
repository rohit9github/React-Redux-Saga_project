import { useDispatch } from 'react-redux';
import './App.css';
import { addToCart } from './Redux/Action';

function App() {

      const dispatch = useDispatch();
      const product={
        name:"phone",
        price:10000,
        quantity:1,
        totalPrice:10000,
        id:1,
      }

  return (
    <div className="App">
      <button onClick={()=>dispatch(addToCart(product))} >ADD To Cart</button>
    </div>
  );
}

export default App;
