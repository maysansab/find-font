import React, {useState}from 'react'
import { Header, Detail, Result,Identify,Newfont,Popular,Search,Login} from './components';
import { Routes ,Route } from 'react-router-dom';


const App = () => {
  const[image, setImage]=useState(null);
  return (
    <>
    
    <Header/>

    <Routes>
    
      {/* <Route path = "/" element={<Header />}/> */}
      <Route path = "/" element={<Detail setImage={setImage} />}/>
      <Route path = "/result" element={<Result image={image} />}/>
      <Route path = "/identify" element={<Identify setImage={setImage}/>}/>
      <Route path = "/Newfont" element={<Newfont/>}/>
      <Route path = "/Popular" element={<Popular/>}/>
      <Route path = "/Search" element={<Search/>}/>
      <Route path = "/Login" element={<Login/>}/>


     
    </Routes>
    </>
  );
};

export default App
