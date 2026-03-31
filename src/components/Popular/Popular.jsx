import React from 'react'
import "./Popular.css";
const Popular = () => {
  return (
      <div className="popular-container">
            <div className="popular-card">
            
            {/* header ส่วนหัว */}
            <div className="popular-header">
                <div className = "header-left">
                    <span>Popular</span>
                    
                   
                </div>
            </div>
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

export default Popular