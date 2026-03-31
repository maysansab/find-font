
import React from 'react'
import "./Identify.css";
import{useLocation, useNavigate} from "react-router-dom";





const Identify = ({setImage}) => {
    const location = useLocation();
    const navigate = useNavigate();

    // รับข้อมูลจากรูปภาพ state ที่ส่งมา
    // const uploadedImage = location.state.state?.image;


    // // ข้อมูลจำลอง (Mock Data)สำหรับรายการผลลัพธ์
    // const results =[
    //     {id: 1, title: 'PAPRIKA FLAVOUR', sup:'TKBobsaltTester'},
    //     {id: 2, title: 'PAPRIKA FLAVOUR', sup:'fonttitntimer2update'},
    // ];

   
    return (
        // <input type = "file" onChange={handleUpload}/>
       <div className="identify-container">
            <div className="identify-card">
            
            {/* header ส่วนบน */}
            <div className="identify-header">
                <div className = "header-left">
                    <span>Result for</span>
                    <span className="file-name">PAPRIKA FLAVOUR</span>
                    <button onClick={() => navigate(-1)} className="back-link">
                        Back to image
                    </button>
                </div>
                
            </div>
            <div className ="result-label">PAPRIKA FLAVOUR</div>
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

export default Identify