import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import { StateProvider } from './contexts/StateProvider';
import { initialState, reducer } from './contexts/reducer';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer} >
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Home/></>}/> {/*we can also render multiple component by wrapping*/} 
        <Route path='/checkout' element={<><Checkout/></>}/>
      </Routes>
    </Router>
    </StateProvider>
  );
}

export default App;
