/* global kakao */
import React, {useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const {Kakao, location} = window;

function Share_modal({props, className, onClose, maskClosable, closable, visible, titles, nums }) {
	const userId = "";
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

	const handleCopyClipBoard = async () => {
		const url = "https://korea-app-beqvu.run.goorm.io/";
		try {
		  await navigator.clipboard.writeText(url);
		  alert('복사 성공!');
		} catch (error) {
		  alert('복사 실패!');
		}
	  };	

	const KakaoShare = () => {
		Kakao.Link.sendCustom({
            templateId: [81118]
        });

		try {
			function sendLinkDefault() {
				Kakao.Share.sendDefault({
				objectType : 'feed',
				content : {
					title : 'Test Homepage Title',
					description : '#Test #Homepage #Kakao Link Description',
					imageUrl : 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
					link : {
						mobileWebUrl : 'https://developers.kakao.com',
						webUrl : 'https://developers.kakao.com',
					},
				},
				social : {
					likeCount : 999,
					commentCount : 999,
					sharedCount : 999,
				},
				buttons : [
					{
						title : '웹으로 보기',
						link : {
							mobileWebUrl : 'https://developers.kakao.com',
							webUrl : 'https://developers.kakao.com',
						},
					},
					{
						title : '앱으로 보기',
						link : {
							mobileWebUrl : 'https://developers.kakao.com',
							webUrl : 'https://developers.kakao.com',
						},
					}, ],
				})
			}
			;
			window.kakaoDemoCallback && window.kakaoDemoCallback()
		} catch (e) {
			window.kakaoDemoException && window.kakaoDemoException(e)
		}
	}
	
	
	const LineShare = () => {
		const title = "PhotoPlace";
		const summary = "장소이름!";
		const br = "\n";
		const link = "https://korea-app-beqvu.run.goorm.io";
		
		const url = "http://line.me/R/msg/text/?" 
		+ encodeURIComponent(title + br + summary + link);
		window.open(url, 'sns', 'height=600 width=500');
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
									공유하기
								</Close>
								<Close className="modal-close" onClick={close}>
									X	
								</Close>
							</CloseStyle>
						)}
						
						<CloseStyled className="modal-close" style={{padding: '0px 10px'}} onClick={KakaoShare}>
							<Share>
								<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd8VMLZ%2FbtrJcGxWJKd%2FIaUnrdLRt41LWVL498QjjK%2Fimg.png"
								style={{height: '50px', width: '50px', padding: '1px 2px'}}
								/>
								<Text>
									카카오톡으로 공유
								</Text>
							</Share>
							<Share>
								<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrHPLy%2FbtrJgPAmMAh%2FfA3tMgpSzMAQ79DBnZTkQ0%2Fimg.png"
								style={{height: '50px', width: '50px', padding: '1px 2px'}}
								/>
								<Text>
									메신저로 공유
								</Text>
							</Share>
							
							<Share onClick={LineShare}>
								<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr9uWm%2FbtrJgduNhuq%2F94lr5w0oztqXb0QuCiv0x0%2Fimg.png"
								style={{height: '50px', width: '50px', padding: '1px 2px'}}
								/>
								<Text>
									라인으로 공유
								</Text>
							</Share>
							
							<Share onClick={handleCopyClipBoard}>
								<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdTY4Ft%2FbtrI2VinIYg%2FKsMqBaRomHlvTnFB5ZkeVK%2Fimg.png"
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
const Field = styled.div`
	font-family: "main_font";
	text-align: left;
	font-size: 15px;
	display: flex;
	outline: none;
	align-content: center;
	flex-direction: row;
`

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