import './App.css';
import Navbar from './components/Navbar';
import Buttons from './components/Buttons';
import Cart1 from './components/Cart1';
import Cart2 from './components/Cart2';
import Cart3 from './components/Cart3';

function App() {
  return (
    <div>
      <Navbar/>
      <Buttons post="Free Shipping"/>
      <Cart1 shop="Add to Cart"/>
      <Cart2 title="Sharp Shooter" name="Sweet Ride" type="Easy Grip" desc="Antique Classic"/>
      <Cart3/>     
    </div>
  );
}

export default App;
