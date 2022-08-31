import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function AdModal({ className, onClose, maskClosable, closable, visible}) {

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
									광고
								</Close>
								<Close className="modal-close" onClick={close}>
									X	
								</Close>
								
							</CloseStyle>
						)}
						<ImgStyle>
							<script type="text/javascript">
								 function callBackFunc(arg1) {
									console.log("현재는 광고가 없습니다!")
								 }
							</script>
							<ins class="kakao_ad_area" style="display:none; position: fixed;" 
								data-ad-onfall = "callBackFunc"
								 data-ad-unit    = "DAN-LZqzukiu3QDGF5c4" 
								 data-ad-width   = "320" 
								 data-ad-height  = "50"></ins> 
							<script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
						</ImgStyle>
					</ModalInner2>
				</ModalInner>
			</ModalWrapper>
		</div>
		
		
            
	);
}

AdModal.propTypes = {
	visible: PropTypes.bool,
};


const CloseStyle = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0);
	width: 300px;
	padding: 10px 15px 10px 15px;
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
	width: 300px;
	height: 300px;
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

export default React.memo(AdModal);