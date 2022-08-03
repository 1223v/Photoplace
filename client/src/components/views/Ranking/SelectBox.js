import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Select = styled.select`
	display: block;
	background-color:white;
	width: 100px;
	height: 35px;
	padding: 5px 5px;
	font-size: inherit;
	border:1px solid;
	border-radius: 4px;
	line-height: inherit;
	margin-top: 10px;
	margin-left:20px;
	&:focus,
  	&:active {
    outline: none;
  }
	
`

function SelectBox(props){

	const navigate = useNavigate();
	const handleChange = (e) => {
		console.log("응애",e.target.value);
	}
	return(
		<Select onChange={handleChange}>
			{props.options.map((option) => (
				<option
					key={option.value}
					value={option.key}
					defaultValue={props.defaultValue === option.key}
				>
					{option.name}
				</option>
			))}
		</Select>
	);
}
export default SelectBox;