import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Share_modal({ className, onClose, maskClosable, closable, visible, titles, nums }) {
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
						
						<CloseStyled className="modal-close">
                			<div style={{zIndex:'999999'}} class="addthis_inline_share_toolbox"></div>
            
							<Field style={{padding: '5px 0px 0px 0px'}}>ㄹㅇㅋㅋ</Field>
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
export default React.memo(Share_modal);