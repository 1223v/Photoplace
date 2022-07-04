import React, {useEffect, useState,Suspense } from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import AIcontent from "./views/AIcontent/AIcontent"
import Loading from "./views/Loading/Loading"

function App() {

	const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

 if(loading){
   return(
     <Loading></Loading>
   )
  }
  return (
     <Suspense >
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
		  <Routes>
			  
			  
			  <Route path="/" element = {<LandingPage/>} />
        <Route path="/AIcontent" element={<AIcontent/>}/>
          
        </Routes>
		  </BrowserRouter>
		  
      </div>
      <Footer />
   </Suspense>
  );
}

export default App;
