import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from 'react-router-dom';
import { BsGeoAltFill } from "react-icons/bs";
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
        
          <IoMdHome
			  size="25"
            
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
		
      </Link>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(2)}>
        
          <BsGeoAltFill
            size="22"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
		 
        
      </Link>
      <Link to="/Mapsearch" className="nav-link" onClick={() => setActiveNav(3)}>
        
          <AiOutlineSearch
            size="25"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        
      </Link>
      <Link to="/Ranking" className="nav-link" onClick={() => setActiveNav(4)}>
        
          <IoMdTrophy
			  size="25"
            
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        
      </Link>
      <Link to ="/AIcontent" className="nav-link" onClick={() => setActiveNav(5)}>
        
          <FaRobot
			  size="25"
            
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
        
      </Link>
      
    </nav>
  );
};

export default Footer;