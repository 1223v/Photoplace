import React from 'react';
import styled from "styled-components";



const Select = styled.select`
	display: block;
	background-color:white;
	width: 80px;
	height: 35px;
	padding: 5px 5px;
	font-size: inherit;
	border:1px solid;
	border-radius: 4px;
	line-height: inherit;
	margin-top: 10px;
	margin-left:20px;
	margin-right:20px;
	&:focus,
  	&:active {
    outline: none;
  }
	
`

function SelectBox(props){

	
	const handleChange = (e) => {
		
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