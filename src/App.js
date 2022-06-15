import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import {useStateValue } from './contexts/StateProvider';
import Login from './components/Login';
import { useEffect } from 'react';
import auth from './firebase';


function App() {
  const [state,dispatch]=useStateValue()
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
        <Route path='/' element={<><Home/></>}/> {/*we can also render multiple component by wrapping*/} 
        <Route path='/checkout' element={<><Checkout/></>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
