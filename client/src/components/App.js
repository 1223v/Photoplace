import React, { Suspense } from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import AIcontent from "./views/AIcontent/AIcontent"

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
		  <Routes>
			  
        <Route exact path="/" element = {<LandingPage/>} />
        <Route exact path="/AIcontent" element={<AIcontent/>}/>
          
        </Routes>
		  </BrowserRouter>
		  
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
