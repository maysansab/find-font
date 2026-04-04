import React,{useEffect,useState,useRef} from 'react'
import "./Result.css";
import { search, iconUpload } from '../../assets';
import {useNavigate, useLocation} from "react-router-dom";

const Result = ({image: propsImage}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const fileInputRef =useRef(null); //ใส่ null เป็นค่าเริ่มต้น

  // 1. สร้าง State สำหรับเก็บ URL ของรูปภาพเพื่อให้ Component Re-render เมื่อมีการเปลี่ยนรูป
  const [currentImage, setCurrentImage] = useState(null);

  //ตั้งค่าเริ่มต้นของรูปภาพ
  useEffect(() => {
    const fileFromState = location.state?.file;
    if (fileFromState) {
      //สร้าง URL จากไฟล์ที่ส่งมา
      const objectUrl = URL.createObjectURL(fileFromState);
      setCurrentImage(objectUrl);
      // cleanup function เพื่อคืนค่า memory
      return ()=> URL.revokeObjectURL(objectUrl);
    } else {
      setCurrentImage(location.state?.image || propsImage);
    }
  }, [location.state, propsImage]);

  // 2. ฟังก์ชันเมื่อเลือกไฟล์ใหม่
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // สร้าง URL สำหรับรูปใหม่และอัปเดต State
      const newImageUrl = URL.createObjectURL(file);
      setCurrentImage(newImageUrl);
    }
  };

  
  const fileFromState = location.state?.file;

  const image = fileFromState 
    ? URL.createObjectURL(fileFromState) 
    : (location.state?.image || propsImage);
    
  
  
    const handleUpload = () =>{
      if(fileInputRef.current){
         fileInputRef.current.click(); /*กด icon แล้วเปิด file */
      }
      // else{
      //   console.error("หาไฟล์ Input ไม่เจอ! ตรวจสอบว่าใส่ ref={fileInputRef} ใน <input> หรือยัง");
      // }
     
    };


  
  return (
    <div className="Result">
      <h1>Find Font</h1>
      <p>Share an image and we'll find the best matching font.</p>
    
      <div className ="result-image">
        {/* ใช้ currentimage แทนimage */}
        {currentImage ? (
          <img src={currentImage}    //เปลี่ยนเป็นรูปที่ upload จริงที่หลัง
          alt = "result"/>
        ) : (
          <p>no image</p>
        )}
            
        
        <div className="hightlight-box">
            PAPRIKA FLAVOUR
        </div>
      </div>

      
      <div className ="result-actions">
        {/* 1. ต้องมีบรรทัดนี้ และต้องมี ref={fileInputRef} เท่านั้น! */}
          <input 
            type="file" 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
            accept="image/*"
            onChange={handleFileChange} 
          />
        <button className="identify-btn" onClick={() => navigate("/identify",{state:{image: currentImage}})}>
          <img src={search} alt="search" className="identify-btn-icon"/>
          Identify font
        </button>

        {/* เรียก handleUpload เมื่อกดปุ่มหรือไอคอน */}
        <button className="upload-btn"onClick={handleUpload}>
          <img src={iconUpload} 
               alt="upload" 
               className="upload-btn-icon"
          />
          Upload new
        </button>
        </div>
    </div>

  );
};

export default Result