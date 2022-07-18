import React, { useState } from 'react';
import styled from "styled-components";
import Select from "../Ranking/SelectBox"
//import SearchIcon from "../../asset/search_icon.png"

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
  padding-top: 2%;
  margin-bottom: 50px;
`
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 3px;
  width: 80%;
  height: 80vh;
  border: 1px solid black;
  margin: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  background: #FFFFFF;
`

const SearchBar = styled.div`
  display: flex;
  font-size: 17px;
  flex-direction: row;
  background: rgba(211, 214, 237, 0.6);
  border: none;
  border-radius: 60px;
  width: 40%;
  height: 1%;
  padding: 0.5% 1% 0.5% 1%;
  margin_bottom: 2%;
  align-items: center;
`

const Image = styled.img`
  margin-left: 1%;
  margin-right: 1%;
  width: 6%;
  height: 6%;
`;

const Input = styled.input`
  font-size: 14px;
  border: none;
  color: black;
  width: 90%;
  background: transparent;
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`

function Mapsearch(){
	
	return(
		<div>
			<PageWrapper>
				<SearchBar>
					<Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fy1gw1%2FbtrHzpEvQmv%2FEuGrbEbuLbuozRHlP56jc1%2Fimg.png" alt="SearchIcon"></Image>
					<Input></Input>
				</SearchBar>
				<SelectWrapper>
					<Select options={OPTIONS} defaultValue="latest"></Select>
				</SelectWrapper>
				<InfoWrapper></InfoWrapper>
			</PageWrapper>
		</div>
	);
}

export default Mapsearch;