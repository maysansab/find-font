import React,{useEffect,useState} from 'react'
import "./Result.css";
import { search, iconUpload } from '../../assets';
import {useNavigate, useLocation} from "react-router-dom";

const Result = ({image: propsImage}) => {
  const location = useLocation();
  const navigate = useNavigate();


  // เช็กว่ามีรูปส่งมาทาง state ไหม ถ้าไม่มีค่อยใช้จาก props
  // const image = location.state?.image || propsImage;

  // if(!image){
  //   return <p style={{color : "red"}}> no image </p>
  // }
  // const location = useLocation();

  // const file = location.state?.file;
  // เช็กว่าสิ่งที่ส่งมาคือ File ไหม ถ้าใช่ให้สร้าง URL ชั่วคราว
  const fileFromState = location.state?.file;
  const image = fileFromState 
    ? URL.createObjectURL(fileFromState) 
    : (location.state?.image || propsImage);
    

  const handleClick = () =>{
    // fileInputRef.current.click(); /*กด icon แล้วเปิด file */
    navigate("identify");
  };
  // const imageUrl = file ? URL.createObjectURL(file) : null;
  // crop ภาพ
  const[cropped, setCropped] = useState(null);

  useEffect(() => {
    if (!image) return;

    const img = new Image();
    img.src = image;

    img.onload =()=>{
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      //ปรับตำแหน่ง

      const x =100;
      const y = 100;
      const w = 200;
      const h = 60;

      canvas.width = w;
      canvas.height = h;

      ctx.drawImage(img,x,y,w,h,0,0,w,h);
      
      setCropped(canvas.toDataURL());

    };
  },[image]);
  
  return (
    <div className="Result">
      <h1>Find Font</h1>
      <p>Share an image and we'll find the best matching font.</p>
    
      <div className ="result-image">
        {image ? (
          <img src={image}    //เปลี่ยนเป็นรูปที่ upload จริงที่หลัง
          alt = "result"
          style={{width:'100%'}}/>
        ) : (
          <p>no image</p>
        )}
            
        
        <div className="hightlight-box">
            PAPRIKA FLAVOUR
        </div>
      </div>

      {/* ปุ่ม */}
      {/* <div className ="result-actions" onClick={handleClick}>
        <button className="identify-btn">
          <img src ={search} alt="search" className="identify-btn-icon"/>
          Identify font
        </button>

        <button className="upload-btn">
          <img src={iconUpload} alt="upload" className="upload-btn-icon"/>
          Upload new
        </button>
      </div> */}
      <div className ="result-actions">
        <button className="identify-btn" onClick={() => navigate("/identify")}>
          <img src={search} alt="search" className="identify-btn-icon"/>
          Identify font
        </button>

        <button className="upload-btn" onClick={() => navigate("/identify")}>
          <img src={iconUpload} alt="upload" className="upload-btn-icon"/>
          Upload new
        </button>
        </div>
    </div>

  );
};

export default Result