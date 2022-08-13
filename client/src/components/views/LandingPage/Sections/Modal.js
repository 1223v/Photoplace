import React, { useRef, useEffect,useState } from 'react';
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Axios from 'axios';
import SlickComponent from './SliderImg';

function Modal({ className, onClose, maskClosable, closable, visible, imageSrcs, contents, titles, nums }) {
	
	const [ShareshowInfo, setShareShowInfo] = useState(false);
	const [SharemodalVisible, setShareModalVisible] = useState(false);
	const [ShareNums, setShareNums] = useState([]);
	const [Share, setShare] = useState(false);
	const [SecondImage, setSecondImage] = useState([])
	
	let body = {
			nums: nums
		}
	useEffect(()=>{
		
		Axios.post('/api/data/ModalSlider',body)
        .then(response => {
			setSecondImage(response.data)
		})
		
	},[])
	
   const openShare = () => {
      setShare(!Share);
   };
	
	const clickShare = () => {
		var url = "https://korea-app-beqvu.run.goorm.io/Detail/";
		var referrer = document.referrer;
		url = url + String(nums);
		alert(referrer);
		
	};
	
	const onMaskClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose(e);
		}
	};


	const close = (e) => {
		if (onClose) {
			onClose(e);
		}
	};
	
	const LinkButton = (id) => {
		const navigate = useNavigate();
		const onClick = (id) => {
			navigate("/Detail/" + id);
			openShare();
		}
	}

	return (
		<div elementId="modal-root">
			<ModalOverlay visible={visible} />
			<ModalWrapper
				className={className}
				onClick={maskClosable ? onMaskClick : null}
				tabIndex="-1"
				visible={visible}
			>
				<ModalInner tabIndex="0" className="modal-inner">
					
					<ModalInner2>
						{closable && (
							<CloseStyle>
								<Close className="modal-close" onClick={close}>
									{titles}
								</Close>
								<Close className="modal-close" onClick={close}>
									X	
								</Close>
								
							</CloseStyle>
						)}
						<ImgStyle>
							<a rel="noopener noreferrer"
								target={'_blank'}
								cursor="pointer"
								align="center">
								<SlickComponent Item={SecondImage} imageSrcs={imageSrcs} nums={nums}></SlickComponent>
							</a>
						</ImgStyle>
						<CloseStyled className="modal-close">
							<icon>
								<img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px' }}
									src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrkOxL%2FbtrH5eJL9Ql%2FbAKeSz9khkTLRRI1AOwo9k%2Fimg.png" alt=""></img>
								<img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px' }}
									
									src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyYIqe%2FbtrH9Hj8n4e%2FMNmqEfiFOKEfMZArrlUBPK%2Fimg.png" alt=""></img>
								<img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px' }}
									src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbifvKn%2FbtrIdyfccPX%2FBmgv8WgxBI2KlLWONeJ1b1%2Fimg.png" alt=""></img>
								<Link 
									to={`/Detail/${nums}?true`}
									onClick={openShare}
								>
									 <img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px', float: 'right' }}
									src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDwzJD%2FbtrIvnZEn58%2FBe6spOic2XwizQK025Wdh0%2Fimg.png" alt=""></img>	
								</Link>

							</icon>
							<Field style={{padding: '5px 0px 0px 0px'}}>{contents}</Field>
							<Field style={{padding: '5px 0px 0px 0px'}}>
								<img alt="" style={{ height:'20px', width:'25px', padding: '1px 2px', float: 'left' }}
									   src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbSShKN%2FbtrIcG5SCGN%2FhKSILrQXKSh4fWQS4CjXQ1%2Fimg.png"></img>
								장소는 어쩌구<br/>
								<img alt="" style={{ height:'20px', width:'25px', padding: '1px 2px', float: 'left' }}
									src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fby0ndM%2FbtrIaPWtnIG%2FMGIxUL2x8XgaRzH6id7Oa1%2Fimg.png"></img>
								거리는 이만큼
							</Field>
						</CloseStyled>
					</ModalInner2>
				</ModalInner>
			</ModalWrapper>
		</div>
		
		
            
	);
}

Modal.propTypes = {
	visible: PropTypes.bool,
};


const CloseStyle = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0);
	width: 270px;
	padding: 10px 15px 10px 15px;
	color: #ffffff;
`;


const CloseStyled = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
	background-color: rgba(0, 0, 0);
	width: 270px;
	min-height: 100px;
	padding: 10px 15px 10px 15px;
	flex-direction: column;
	color: #ffffff;
	
`;
const Close = styled.span`
	cursor: pointer;
	font-weight: bold;
	font-size: 20px;
	padding-bottom: 10px;
	font-family: "tag_font";
`;
const ImgStyle = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0);
	width: 270px;
	height: 250px;
	color: #ffffff;
	align-items: center;
`;

const Img = styled.img`
	width: 85%;
	height: 85%;
`;

const ModalWrapper = styled.div`
	box-sizing: border-box;
	display: ${(props) => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	overflow: auto;
	outline: 0;
	align-items: center;
`;

const ModalOverlay = styled.div`
	box-sizing: border-box;
	display: ${(props) => (props.visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 999;
`;

const ModalInner2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ModalInner = styled.div`
	box-sizing: border-box;
	position: relative;
	// box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
	// background-color: #fff;
	// border-radius: 10px;
	width: 360px;
	max-width: 480px;
	top: 50%;
	transform: translateY(-50%);
	margin: 0 auto;
	padding: 40px 20px;
`;
const Field = styled.div`
	font-family: "main_font";
	text-align: left;
	font-size: 15px;
	display: flex;
	outline: none;
	align-content: center;
	flex-direction: row;
`

const icon = styled.div`
	display: flex;
	outline: none;
	flex-direction: row;
`

export default React.memo(Modal);