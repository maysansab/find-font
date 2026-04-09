import React from 'react'
import "./Popular.css";
import { box } from '../../assets';
const Popular = () => {
  return (
      <div className="popular-container">
            <div className="popular-card">
            
            {/* header ส่วนหัว */}
            <div className="popular-header">
                <div className = "font-preview">
                    <span>Popular</span>
                </div>
            </div>
            <input
                type="text"
                className="popurlar-label-input"
                // value={previewText}
                placeholder="Type something..."
                // onChange={(e) => setPreviewText(e.target.value)}
                // spellCheck="false"
            />
            <div className="popular-content" >
                            {/* ใส่รายการฟอนต์ตรงนี้ */}
                 <img 
                    src={box} 
                    alt="box" 
                    className="box-icon" />
                <div className ="popular-text-group">
                <h1 className="not-found-title">No trending fonts found</h1>
                <p className="not-found-desc">It looks like there’s no data available at the moment. </p>
                <p className="not-found-desc">Check back soon to see the most popular fonts.</p>
                </div>
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