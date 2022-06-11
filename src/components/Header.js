import React from "react";
import "../style/Header.css";
import logo from "../res/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{Link} from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <Link to="/"><img src={logo} alt="logo" className="header-logo" /></Link>

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon"/>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header-cart">
         <ShoppingCartIcon/>
         <span className="header-optionLineTwo header-cartCount">0</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
