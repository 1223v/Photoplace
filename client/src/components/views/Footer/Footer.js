import React, { useState } from "react";
import "./BottomNav.css";
import { Link } from 'react-router-dom';
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGeoAltFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdHome,IoMdTrophy } from "react-icons/io";
import { DiAndroid } from "react-icons/di";
const Footer = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      
      <Link to ="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <div>
          <IoMdHome
			  size="25"
            
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </div>
      </Link>
      <Link to="/Mapsearch" className="nav-link" onClick={() => setActiveNav(2)}>
        <div>
          <BsGeoAltFill
            size="25"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(3)}>
        <div>
          <AiOutlineSearch
            size="25"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/Ranking" className="nav-link" onClick={() => setActiveNav(4)}>
        <div>
          <IoMdTrophy
			  size="25"
            
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to ="/AIcontent" className="nav-link" onClick={() => setActiveNav(5)}>
        <div>
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