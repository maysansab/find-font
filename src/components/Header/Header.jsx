import React from 'react'
import{ useNavigate } from'react-router-dom';
import "./Header.css";

import { logo, search } from '../../assets';

const Header = () => {
  const navigate = useNavigate();
  return (
   
    <header className="header">

        {/* กด logo เด้งไปหน้า Detail */}
        {/* <img src={logo} alt="logo" className = "logo" onClick={()=> navigate('/detail')}/> */}
        <div className="nav-logo" onClick={()=> navigate('/')}>
          <img src={logo} alt="logo" className = "logo"/>
        </div>
{/*         
        เมื่อกดช่องค้นหา เด้งไปหน้า Search หรือกด Enter */}
        <div className="search-box">
          <img src={search} alt ="search" className="search-icon"/>
          <input
          
          type="text"
          placeholder="Search Font"
          className="search-input"
          onFocus={()=>navigate('/search')}
          />
        </div>
        
        
        <div className="menu">
          {/* เด้งไปหน้า Popular */}
          <span className="popular-btn" onClick={()=> navigate('/popular')}>Popular</span>
          {/* เด้งไปหน้า newfon */}
          <span className="newfont-btn" onClick={()=> navigate('/newfont')}>New Font</span>
          {/* เด้งไปหน้า login */}
          <button className="login-btn" onClick={()=> navigate('/login')}>Login</button>
        </div>
         
    </header>
   
  );
};

export default Header