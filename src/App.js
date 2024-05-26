import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Cart from './Component/Cart';

function App() {
  return (
    <div className="App">
      {/* <div className="App-header"> */}
       <Home />
       <Cart/>
      {/* </div> */}
    </div>
  );
}

export default App;
