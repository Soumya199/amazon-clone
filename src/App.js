import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import {useStateValue } from './contexts/StateProvider';
import Login from './components/Login';
import { useEffect } from 'react';
import auth from './firebase';
import PaymentCheckout from './components/PaymentCheckout';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

function App() {
  const [state,dispatch]=useStateValue()
  const stripePromise = loadStripe('pk_test_51LAzXuSHstxpudMjQMRkYMLxwtzN7Ae7FClrj38endCTlFcNp8CjhIw8Udmohf1vB5wOnNhXkIg0etPVv8wkiEUb00G0WNTKXT');
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  useEffect(()=>{
   //will only run once the app component loads..
   auth.onAuthStateChanged((authuser)=>{
    console.log(authuser)
    if(authuser){
     dispatch({
      type:'SET_USER',
      user:authuser
     })
    }

    else{
      dispatch({
        type:'SET_USER',
        user:null
       })
    }
   })
  },[])

  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/' element={<Home/>}/> 
        <Route path='/payment' element={<Elements stripe={stripePromise}><PaymentCheckout/></Elements>}/> 
        <Route path='/checkout' element={<><Checkout/></>}/> {/*we can also render multiple component by wrapping*/} 
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
