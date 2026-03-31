import React from 'react'
import './Search.css';
import{useLocation, useNavigate} from "react-router-dom";
const Search = () => {
  //  const location = useLocation();
  // const navigate = useNavigate();
  return (

    <div className="search-container">
            <div className="search-card">
            
            {/* header ส่วนบน */}
            <div className="search-header">
                <div className = "header-left">
                    <span>TKBobtailTester</span>
                    
                    {/* <button onClick={() => navigate(-1)} className="back=link">
                        Back to image
                    </button> */}
                </div>
            </div>
            {/* <div  className="search-header">
              <span className="file-name">PAPRIKA FLAVOUR</span>
            </div> */}
            <div className ="result-label">
              PAPRIKA FLAVOUR
            </div>


            
            {/* ผลลัพธ์  font ออกมา*/}
            
            {/* <div className ="result-list">
                {results.map((item)=>(
                    <div key={item.id} className="result-item">
                        <div className="item-info">
                            <h2 className="item-title">{item.title}</h2>
                            <p className="item-sub">{item.sub}</p>

                        </div>
                        <button className="dowload-btn">Downloads</button>
                    </div>
                ))}
            </div> */}
            
        </div>
       </div>
  )
}

export default Search