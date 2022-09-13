import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlickComponent from './SliderImg';
import { MdContentCopy } from 'react-icons/md';

function Modal({ className, onClose, maskClosable, closable, visible, imageSrcs, contents, titles, nums,cityd }) {
	
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
	const handleCopyClipBoard2 = async (e) => {
		let city = cityd;
		let cityfs =(city||'').split('[', 2);
		if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      	}
		try {
		  await navigator.clipboard.writeText(cityfs[0]);
		  alert('복사 성공!');
		} catch (error) {
			try{
				const txt =  document.createElement('input');
				txt.value = city;
				document.body.appendChild(txt);
				txt.select();
				await document.execCommand("copy");
				document.body.removeChild(txt);
				alert('복사 성공!');
			}
			catch(error){
				try {
					e.preventDefault();
					e.clipboardData.setData(cityfs[0], cityfs[0]);
					alert('복사 성공!');
				}
				catch(error) {
					return alert('복사 실패');
				}
			}
		}
	  };
	
	return (
		<div elementid="modal-root">
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
									{(titles||'').split('(', 2)[0]}
									<br/>
									{(titles||'').split('(')[1]}
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
								<SlickComponent imageSrcs={imageSrcs} nums={nums}></SlickComponent>
							</a>
						</ImgStyle>
						<CloseStyled className="modal-close">
							<Icon>
								<LeftBox>
									<Link 
										to={`/Detail/${nums}`}
									>
									<img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px' }}
										src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrkOxL%2FbtrH5eJL9Ql%2FbAKeSz9khkTLRRI1AOwo9k%2Fimg.png" alt=""></img>
									</Link>
									<Link 
										to={`/Detail/${nums}`}
									>
										<img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px' }}
									
										src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyYIqe%2FbtrH9Hj8n4e%2FMNmqEfiFOKEfMZArrlUBPK%2Fimg.png" alt=""></img>
									</Link>
										<Link 
										to={`/Detail/${nums}`}
									>
									<img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px' }}
										src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbifvKn%2FbtrIdyfccPX%2FBmgv8WgxBI2KlLWONeJ1b1%2Fimg.png" alt=""></img>
									</Link>
											</LeftBox>
								<RightBox>
									<Link 
										to={`/Detail/${nums}?true`}
									>
										 <img style={{ height:'20px', width:'25px', margin: 'auto', padding: '1px 2px', float: 'right' }}
										src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDwzJD%2FbtrIvnZEn58%2FBe6spOic2XwizQK025Wdh0%2Fimg.png" alt=""></img>	
									</Link>
								</RightBox>

							</Icon>
							<Field style={{padding: '5px 0px 0px 0px'}}>{contents}</Field>
							<Field style={{padding: '5px 0px 0px 0px'}}>
								<img alt="" style={{ height:'20px', width:'25px', padding: '1px 2px', float: 'left' }}
									   src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbSShKN%2FbtrIcG5SCGN%2FhKSILrQXKSh4fWQS4CjXQ1%2Fimg.png"></img>
								{cityd}
								<MdContentCopy size="17" onClick={handleCopyClipBoard2}/>
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
	width: 240px;
	padding: 10px 15px 10px 15px;
	color: #ffffff;
`;


const CloseStyled = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
	background-color: rgba(0, 0, 0);
	width: 240px;
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
`;

const Icon = styled.div`
	display: flex;
	outline: none;
	flex-direction: row;
`;

const LeftBox = styled.div`
	float: left;
	width: 50%;
	border-bottom-left-radiuis:15px;
	border-right:1.5px solid #000000;
`;
const RightBox = styled.div`
	float: right;
	width: 50%;
	border-bottom-right-radius:15px;
	border-left:1.5px solid #000000;
`;

export default React.memo(Modal);