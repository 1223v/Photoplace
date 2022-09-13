import React from 'react';
import styled from "styled-components";
import {IoIosArrowBack} from "react-icons/io";
import {GrShareOption} from "react-icons/gr";
import {useShare} from '../Context/forShareModal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainText=styled.h1`
   font-size: 25px;
   margin-top: 10%;
   margin-bottom: 10%;
   font-weight:bolder;
   font-family: 'main_font';
   text-align: center;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 9999;
`
function NavbarDetail() {
	const history=useNavigate();
  	const {Appear, setAppear} = useShare();
	const click = () => {
		setAppear(true);
	}
	const navcontent = useSelector((state) => state.user);
	let navcity = navcontent.navSuccess
	let navcitys = (navcity||'').split('(', 2);
  return (
    <div >
		<NavContainer>
			<IoIosArrowBack size="30" color="#000000" onClick={()=> history(-1)} style={{marginLeft: '3%'}}/>
			<MainText>{navcitys[0]}</MainText>
			<GrShareOption onClick={click} size="30" color="#000000" style={{marginRight: '3%'}}/>
		</NavContainer>
	</div>
  )
}

export default NavbarDetail;