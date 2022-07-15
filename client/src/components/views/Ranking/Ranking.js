import React, { useState } from 'react';
import styled from "styled-components";
import view from "../../asset/moon-01.png"
import photozone from "../../asset/photo-01.png"
import attraction from "../../asset/attraction-01.png"
import Select from "./SelectBox"
const OPTIONS = [
	{value: "latest", name: "최신순"},
	{value: "popularity", name: "인기순"},
];

const SelectWrapper = styled.div`
  display: flex;
  margin: 10px;
  margin_bottom: 15px;
  width: 80%;
`
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin_bottom: 15px;
  width: 80%;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  width: 100%;
`;

const TitleImage = styled.img`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 40px;
  height: 40px;
`;

const Title = styled.div`
  font-size: 30px;
  margin-top: 8px;
  margin_bottom: 10px;
  font-weight: bold;
`
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
  flex-direction: row;
  border-radius: 40px;
  border: 2px solid black;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  width: 100%;
 `
function Ranking(){
	
	return(
		<div>
			<PageWrapper>
				<SelectWrapper>
					<Select options={OPTIONS} defaultValue="latest"></Select>
				</SelectWrapper>
				<InfoWrapper>
					<TitleWrapper>
						<TitleImage src={view} alt="view"></TitleImage>
						<Title>야경</Title>
					</TitleWrapper>
					<ItemWrapper></ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper>
						<TitleImage src={attraction} alt="attraction"></TitleImage>
						<Title>놀이동산</Title>
					</TitleWrapper>
					<ItemWrapper></ItemWrapper>
				</InfoWrapper>
				<InfoWrapper>
					<TitleWrapper>
						<TitleImage src={photozone} alt="photozone"></TitleImage>
						<Title>포토존</Title>
					</TitleWrapper>
					<ItemWrapper></ItemWrapper>
				</InfoWrapper>
			</PageWrapper>
		</div>
	);
}

export default Ranking;