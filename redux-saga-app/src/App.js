import { useDispatch } from 'react-redux';
import './App.css';
import { addToCart } from './Redux/Action';
import Header from './Components/Header';
import Main from './Components/Main';
import { Route, Routes } from "react-router-dom"
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;
