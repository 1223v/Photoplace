import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


function Modal({ className, onClose, maskClosable, closable, visible, imageSrcs, contents, titles }) {
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
									{titles}
								</Close>
								<Close className="modal-close" onClick={close}>
									<b>X</b>
									
								</Close>
								
							</CloseStyle>
						)}
						
						<ImgStyle>
							<a
								//href="/"
								rel="noopener noreferrer"
								target={'_blank'}
								cursor="pointer"
							>
								<img src={`${imageSrcs}`} style={{ width: '250px' , height: '240px', borderRadius: '15px' }} alt="" />
							</a>
						</ImgStyle>
						
						<CloseStyled>
								<Close className="modal-close">
									
									<b>{contents}</b>
									
								</Close>
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

const ModalInner2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ImgStyle = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	width: 270px;
	padding: 10px;
	border-radius: 0 0 0 0;
	color: #ffffff;
	align-items: center;
	
`;

const CloseStyle = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #282828;
	width: 270px;
	padding: 15px;
	border-radius:  15px 15px 0 0;
	color: #ffffff;
`;
const CloseStyled = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	width: 270px;
	padding: 50px;
	border-radius: 0 0 15px 15px;
	color: #282828;
	
`;
const Close = styled.span`
	cursor: pointer;
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

export default React.memo(Modal);