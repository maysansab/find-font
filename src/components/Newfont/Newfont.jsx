import React from 'react'
import "./Newfont.css";
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




            
            </div>

            
        
            
        </div>
       </div>
  )
}

export default Newfont