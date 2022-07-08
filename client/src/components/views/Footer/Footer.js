import React, { useState } from "react";
import "./BottomNav.css";
import {BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      
      <Link to ="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </div>
      </Link>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(2)}>
        <div>
          <FontAwesomeIcon
            icon="compass"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(3)}>
        <div>
          <FontAwesomeIcon
            icon="plus"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/" className="nav-link" onClick={() => setActiveNav(4)}>
        <div>
          <FontAwesomeIcon
            icon="medal"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to ="/AIcontent" className="nav-link" onClick={() => setActiveNav(5)}>
        <div>
          <FontAwesomeIcon
            icon="user"
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      
    </nav>
  );
};

export default Footer;