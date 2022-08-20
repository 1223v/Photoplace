import React, {useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//const {Kakao, location} = window;

function Share_modal({className, onClose, maskClosable, closable, visible, titles, img, description, view }) {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://developers.kakao.com.sdk/js/kakao.js";
		script.async = true;
		document.body.appendChild(script);
		return () => document.body.removeChild(script);
	}, []);
	
	
	
	const shareKakaoCustom = () => {
		const url = document.URL;
		let found = parseInt(url.match(/\d+/g));
		
		if(window.Kakao) {
			
			const kakao = window.Kakao;
			if(!kakao.isInitialized()) {
				kakao.init("88a1a10486c09c3e8ebff912acfccd68");
			}

			kakao.Link.sendCustom({
				templateId: 81118,
				templateArgs: {
					'like': 123,
					'share': 321,
					'view': 213,
					'title': titles,
					'num': found,
					'description': description,
					'image': img
				}
			});			
		}
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

	const handleCopyClipBoard = async (e) => {
		let url = document.URL;
		url = url.slice(0, -5);
		
		if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      	}
		
		try {
		  await navigator.clipboard.writeText(url);
		  alert('복사 성공! on 1');
		} catch (error) {
			try{
				const txt =  document.createElement('input');
				txt.value = url;
				document.body.appendChild(txt);
				txt.select();
				await document.execCommand("copy");
				document.body.removeChild(txt);
				alert('복사 성공! on 2');
			}
			catch(error){
				try {
					e.preventDefault();
					e.clipboardData.setData(url, url);
					alert('복사 성공! on 3');
				}
				catch(error) {
					return alert('복사 실패');
				}
			}
		}
	  };		

	const LineShare = () => {
		const title = titles;
		const summary = description;
		const br = "\n\n";
		const link = document.URL.slice(0,-5);
		
		const url = "http://line.me/R/msg/text/?" 
		+ encodeURIComponent(title + br + summary + br + link);
		window.open(url, 'sns', 'height=600 width=500');
	}


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
									공유하기
								</Close>
								<Close className="modal-close" onClick={close}>
									X	
								</Close>
							</CloseStyle>
						)}
						
						<CloseStyled className="modal-close" style={{padding: '0px 10px'}} >
							<Share onClick={shareKakaoCustom}>
								<img alt="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd8VMLZ%2FbtrJcGxWJKd%2FIaUnrdLRt41LWVL498QjjK%2Fimg.png"
								style={{height: '50px', width: '50px', padding: '1px 2px'}}
								/>
								<Text>
									카카오톡으로 공유
								</Text>
							</Share>
							
							<Share onClick={LineShare}>
								<img alt="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr9uWm%2FbtrJgduNhuq%2F94lr5w0oztqXb0QuCiv0x0%2Fimg.png"
								style={{height: '50px', width: '50px', padding: '1px 2px'}}
								/>
								<Text>
									라인으로 공유
								</Text>
							</Share>
							
							<Share onClick={handleCopyClipBoard}>
								<img alt="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdTY4Ft%2FbtrI2VinIYg%2FKsMqBaRomHlvTnFB5ZkeVK%2Fimg.png"
								style={{height:'50px', width:'50px', padding: '1px 2px'}}
								/>
								<Text>
								  url 복사
								</Text>
							</Share>
							<Share>
							</Share>	
						</CloseStyled>
					</ModalInner2>
				</ModalInner>
			</ModalWrapper>
			
		</div>
            
	);
}


Share_modal.propTypes = {
	visible: PropTypes.bool,
};
const Text = styled.div`
	font-family: "main_font";
	text-align: left;
	font-size: 15px;
	display: flex;
	outline: none;
	align-content: center;
	flex-direction: row;
	padding: 10px
`;

const CloseStyle = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0);
	width: 100%;
	padding: 10px 15px 0px 15px;
	color: #ffffff;
	border-radius: 20px 20px 0px 0px / 20px 20px 0px 0px;
`;


const CloseStyled = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
	background-color: rgba(0, 0, 0);
	width: 100%;
	min-height: 100px;
	height: 330px;
	padding: 10px 15px 10px 15px;
	flex-direction: column;
	color: #ffffff;
	position: relative;
	
`;
const Close = styled.span`
	cursor: pointer;
	font-weight: bold;
	font-size: 22px;
	padding: 10px;
	padding-bottom: 10px;
	font-family: "tag_font";
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
	align-items: bottom;
`;

const ModalOverlay = styled.div`
	box-sizing: border-box;
	display: ${(props) => (props.visible ? 'block' : 'none')};
	position: fixed;
	min-width: 350px;
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
	width: 100%;
	max-width: 100%;
	min-width: 350px;
	top: 50%;
	height: 50%;
	//transform: translateY(50%);
	margin: 0 auto;
	padding: 20px 20px;
`;

const Share = styled.div`
	font-family: "main_font";
	text-align: left;
	font-size: 15px;
	display: flex;
	outline: none;
	align-content: center;
	flex-direction: row;
	padding: 10px
`
export default React.memo(Share_modal);