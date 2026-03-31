import React from 'react'
import "./Newfont.css";
const Newfont = () => {
  return (
    <div className="newfont-container">
            <div className="newfont-card">
            
            {/* header ส่วนบน */}
            <div className="newfont-header">
                <div className = "header-left">
                    <span>New Fonts</span>
                    
                   
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

export default Newfont