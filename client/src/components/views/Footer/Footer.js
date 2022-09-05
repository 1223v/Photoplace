import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from 'react-router-dom';
import { FaRobot } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdHome,IoMdTrophy } from "react-icons/io";

const Footer = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
	
  return (
	  
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      
      <Link to ="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <div className="nav-color">
          <IoMdHome
			  size="25"
            
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
         </div>
		
      </Link>
    
      <Link to="/Mapsearch" className="nav-link" onClick={() => setActiveNav(3)}>
        <div className="nav-color">
          <AiOutlineSearch
            size="25"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
		  </div>
      </Link>
      <Link to="/SeoulRanking" className="nav-link" onClick={() => setActiveNav(4)}>
        <div className="nav-color">
          <IoMdTrophy
			  size="25"
            
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
         </div>
      </Link>
      <Link to ="/Seoul" className="nav-link" onClick={() => setActiveNav(5)}>
        <div className="nav-color">
          <FaRobot
			  size="25"
            
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
         </div>
      </Link>
      
    </nav>
		 
  );
};

export default Footer;

