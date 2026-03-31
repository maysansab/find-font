import {useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Detail.css";
import { iconUpload } from '../../assets';

const Detail = ({ setImage }) => {
  const fileInputRef =useRef();
  // const [preview, setPreview] = useState(null); /*เก็บรูป */

  const handleClick = () =>{
    fileInputRef.current.click(); /*กด icon แล้วเปิด file */
  };
  const[fileName, setFileName]= useState("");

  const[loadings, setLoading] = useState(false); /*loading */
  
  const navigate = useNavigate();

  const handleFile = (file)=>{
    if(file && file.type.startsWith("image/")){
      // const imageUrl = URL.createObjectURL(file);
      // setPreview(imageUrl);
      
      setFileName(file.name);

      const reader = new FileReader();
      
      reader.onloadend = () => {
        const imageData = reader.result;
        setImage(imageData);
        // รอให้ 1 วิก่อน Loading
        setTimeout(()=> {
          setLoading(true);/*เริ่มโหลด */

          /*จำลอง AI */
          setTimeout(()=>{
            navigate("/result",{ state:{ image:imageData }});/*ไปหน้าใหม่ */
          }, 2000);

        }, 1000);
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleDrop = (e)=>{
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver =(e)=>{
    e.preventDefault();
  };
  return (
    <div className="Detail">
      <h1>Find Font</h1>
      <p>Share an image and we'll find the best matching font.</p>
      
    {!loadings ?(
      <div 
        className="upload-box"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        
        <input
          type="text"
          placeholder="Upload an image or drag and drop an image"
          className="upload-input"
          readOnly
          value={fileName}
        />

        <img
          src={iconUpload}
          alt="iconUpload"
          className="upload-icon"
          onClick={handleClick}
        />

        {/* input ซ่อนไว้ */}
        <input
          type="file"
          ref={fileInputRef}
          hidden
          onChange={(e)=> handleFile(e.target.files[0])}
        />
        <h2>or drag and drop an image</h2>
      </div>
    ) :(
      // {/* /*แสดงรูป */ }
      // {/* {preview && (
      //   <div className ="preview">
      //     <img src={preview} alt="preview"/>
      //   </div>
      // )} */}
      // <h2>or drag and drop an image</h2>
      
      <div className="loading-text">
       
        <span className ="loadingicon"></span>
        <span className="loading-input">
          Identifying text in your image
        </span>
         
      </div>
      )}    
    </div>
    
  );
};

export default Detail