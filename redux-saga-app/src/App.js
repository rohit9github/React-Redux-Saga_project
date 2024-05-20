import { useDispatch } from 'react-redux';
import './App.css';
import { addToCart } from './Redux/Action';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
