import React,{useState,useEffect} from 'react'
import './Search.css';
import{useLocation, useNavigate, useSearchParams} from "react-router-dom";
import { robot } from '../../assets';

const Search = () => {
  //  const location = useLocation();
  const navigate = useNavigate();
//    const[query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  
  // ดึงค่า 'q' จาก URL มาเตรียมไว้ก่อน
  const initialQ = searchParams.get("q");

// สร้าง State สำหรับเก็บคำที่จะโชว์ใน "Searching for: ..."
  const [queryFromUrl, setQueryFromUrl] = useState(initialQ||"All Fonts");
  // State สำหรับช่องพิมพ์ทดสอบฟอนต์
  const [previewText, setPreviewText] = useState(initialQ||"");

// 2. ฟังก์ชันสำหรับล้างค่า (Reset) เมื่อโหลดหน้า หรือ Refresh
  useEffect(()=>{
    // ดึงค่า 'q' จาก URL ทุกครั้งที่ searchParams มีการเปลี่ยนแปลง
    // const currentQuery = searchParams.get("q");
    const q = searchParams.get("q");
    
    
    if (q) {
      setQueryFromUrl(q); // อัปเดต "Searching for: bbbbb"
      setPreviewText(q);  // (Option) ถ้าอยากให้ช่องพิมพ์ข้างล่างเปลี่ยนตามคำค้นหาด้วย
      
      // replace: true เพื่อไม่ให้ Browser เก็บประวัติการล้างนี้ไว้ (กด Back จะได้กลับไปหน้าก่อนหน้าได้จริง)
      navigate('/search', { replace: true });
      
    } 

    }, [searchParams,navigate]);
    // 2. ถ้ามีค่าค้นหาจากหน้าแรก ให้เอามาตั้งเป็นค่าเริ่มต้นในช่องพิมพ์
   

  return (

    <div className="search-container">
            <div className="search-card">
                
            
            {/* header ส่วนบน */}
            <div className="search-header">
                <div className = "font-preview">
                    {/* {queryFromUrl ||"No search Query"} */}
                    {/* ตรงนี้อาจจะโชว์ว่ากำลังค้นหาฟอนต์อะไรอยู่ */}
                     {/* Searching for: {queryFromUrl || "All Fonts"} */}
                     Searching for: {queryFromUrl}
                </div>
            </div>
            {/* 2. ส่วนที่พิมพ์แก้ได้ (ใหญ่ๆ) */}
            <input
                type="text"
                className="result-label-input"
                // value={previewText}
                placeholder="Type something..."
                onChange={(e) => setPreviewText(e.target.value)}
                spellCheck="false"
            />

            {/* 3. ส่วนแสดงผลลัพธ์ข้างล่าง (ถ้ามี) */}
            <div className="result-content" >
                {/* ใส่รายการฟอนต์ตรงนี้ */}
                 <img 
                    src={robot} 
                    alt="robot" 
                    className="robot-icon" />
                <div className ="result-text-group">
                <h1 className="not-found-title">we don’t recognize that font.</h1>
                <p className="not-found-desc"> Try a different search or check the spelling of your query</p>
                </div>
            </div>

           
          
            
        </div>
       </div>
  )
}

export default Search