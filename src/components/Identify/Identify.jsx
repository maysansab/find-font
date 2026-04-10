
import React from 'react'
import "./Identify.css";
import{useLocation, useNavigate} from "react-router-dom";
import { search } from '../../assets';





const Identify = () => {
    const location = useLocation();
    const navigate = useNavigate();

    //ดึงรูปที่ส่งมาจากหน้า Result
    const imageToBack = location.state?.image;

    const handleBack = () =>{
        //ส่งรูปกลับหน้า Result เพื่อใช้รูปหน้า Result ใช้รูปนี้แสดงผล
        navigate("/result",{state:{image: imageToBack}});
        
    };


   
    return (
        // <input type = "file" onChange={handleUpload}/>
       <div className="identify-container">
            <div className="identify-card">
            
            {/* header ส่วนบน */}
            <div className="identify-header">
                <div className = "header-left">
                    <span>Result for</span>   
                    {/* --- ส่วนที่แก้ไข: แสดงรูปภาพที่อัปโหลดแทนข้อความ --- */} 
                        <div className="file-image-wrapper">
                            <img 
                                src={imageToBack} 
                                alt="Uploaded Thumbnail" 
                                className="uploaded-thumbnail"
                            />
                        </div>  
                    <button onClick={handleBack} className="back-link">
                        Back to image
                    </button>
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

export default Identify