import React from "react";
import "../style/Header.css";
import logo from "../res/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{Link} from "react-router-dom"
import {useStateValue} from "../contexts/StateProvider"
import auth from "../firebase";

function Header() {
  const handleAuthentication=()=>{
    if(state.user){
      auth.signOut();
    }
  }
 const [state,dispatch]=useStateValue()
  return (
    <div className="header">
      <Link to="/"><img src={logo} alt="logo" className="header-logo" /></Link>

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon"/>
      </div>
      <div className="header-nav">
        <Link to={!state.user && "/login"}>
        <div className="header-option" onClick={handleAuthentication}>
          <span className="header-optionLineOne">Hello {state.user?state.user.email:"Guest"}</span>
          <span className="header-optionLineTwo">{state.user?"SignOut":"SignIn"}</span>
        </div>
        </Link>
        <Link to="/orders">
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header-cart">
         <ShoppingCartIcon/>
         <span className="header-optionLineTwo header-cartCount">{state.cart?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
