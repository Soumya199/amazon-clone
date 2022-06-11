import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Home/></>}/> {/*we can also render multiple component by wrapping*/} 
        <Route path='/checkout' element={<><Checkout/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
