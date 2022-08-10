import React, { useRef, useEffect,useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from "react-icons/io"


const MainText=styled.div`
   
   font-size:25px;
   margin: auto;
   font-family: 'main_font', cursive;
   
`;


function NavBar_Detail() {
	const [tmpNum, setNum] = useState(0);
	
  const test = () => {
	  const url = document.url;
	  setNum(url.substr(-1));
  }
  
  const openShare = () => {
      setShare(!Share);
   };
  
  
  return (
    <div >
    <Navbar style={{position: "fixed", backgroundColor:"#FFFFFF", top:"0", left:"0", right:"0", zIndex:"500"}}>
    <Container onLoad={test}>		
		<div style={{ display:'flex', textAlign:'center', width:'100%' }}>
    		<Link to="/Ranking">
				<IoIosArrowBack size="30" color="#707070"/>
			</Link>
			
			<MainText style={{ textAlign:'center' }}>장소이름</MainText>
			
			<button>
				<Link 
				to={`/Detail/${tmpNum}`}
				state={{num:tmpNum, IsShare:true}}
				onClick={openShare}
				>
					 <img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px', float: 'right' }}
					src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDwzJD%2FbtrIvnZEn58%2FBe6spOic2XwizQK025Wdh0%2Fimg.png" alt=""></img>	
				</Link>
			</button>
		</div>
    </Container>
  </Navbar>
</div>
  )
}

export default NavBar_Detail