import React from 'react'
import "./Newfont.css";
import { comming } from '../../assets';
const Newfont = () => {
  return (
    <div className="newfont-container">
            <div className="newfont-card">
            
            {/* header ส่วนบน */}
            <div className="newfont-header">
                <div className = "font-preview">
                    <span>New Fonts</span>
                    
                   
                </div>
            </div>
            <input
                type="text"
                className="newfont-label-input"
                // value={previewText}
                placeholder="Type something..."
                // onChange={(e) => setPreviewText(e.target.value)}
                // spellCheck="false"
            />
            <div className="newfont-content" >
                            {/* ใส่รายการฟอนต์ตรงนี้ */}

                <img 
                    src={comming} 
                    alt="comming" 
                    className="comming-icon" />
                <div className ="comming-text-group">
                <h1 className="not-found-title">Fresh fonts are on the way!</h1>
                <p className="not-found-desc">We're currently hand-picking the latest font designs for you.</p>
                <p className="not-found-desc">Hang tight and check back soon!</p>
                </div>
            </div>

            
        
            
        </div>
       </div>
  )
}

export default Newfont