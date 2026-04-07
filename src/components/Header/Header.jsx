import React,{useState,useEffect} from 'react'
import{ useNavigate,useLocation, useSearchParams } from'react-router-dom';
import "./Header.css";

import { logo, search } from '../../assets';

const Header = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams(); // เพิ่มการดึง searchParams
  
  // ดึงค่า q จาก URL มาเป็นค่าเริ่มด้น เพื่อให้ reload แล้วค่าไม่หาย
  const[query, setQuery] = useState(searchParams.get("q") || "");


  //เมื่อผู้ใช้กด back/forward) เมื่อ URL เปลี่ยน
  useEffect(()=>{
    const q = searchParams.get("q");
    if (q){
      
      setQuery(q);
    }else if (!location.pathname.startsWith('/search')){
      setQuery(""); //ถ้าไม่อยู่หน้า search ให้ล้างค่า
    }

  },[searchParams,location.pathname]);

  const handleSearch = (e)=> {
    if (e) e.preventDefault(); //กันหน้าเว็บรีโหลด
    if(query.trim()){
      //ส่งค่า query ไปหน้า search ผ่าน URl Parameter
      // navigate(`/search?q=${query}`);
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }else{
      navigate('/search')// ถ้าไม่พิมพ์อะไรเลยจะไปหน้า search เฉยๆ (จะโชว์ All Fonts)
    }
  };

  // กด Enter ในช่อง Input
  const handleKeyDown = (e)=>{
    if (e.key === 'Enter'){
      handleSearch(e); // ส่ง e เข้าไปเพื่อให้ e.preventDefault() ทำงานได้
    }
  };
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
          
          <input
          type="text"
          placeholder="Search Font"
          className="search-input"
          value={query} // เชื่อม State กับ Input
          onChange={(e) => setQuery(e.target.value)} // เก็บค่าที่พิมพ์
          onKeyDown={handleKeyDown} // รองรับการกด Enter
          // onFocus={() => {
          //   if (location.pathname !== '/search') navigate('/search');
          // }}
          />
          
          <img 
          src={search} 
          alt="search" 
          className="search-icon" 
          onClick={handleSearch} // ทำให้ไอคอนกดค้นหาได้
          
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