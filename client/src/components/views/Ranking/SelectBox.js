import React, { useState } from 'react';
import styled from "styled-components";

const Select = styled.select`
	display: block;
	width: 20%;
	height: 4%;
	padding: 8px 8px;
	font-size: inherit;
	border:1px solid;
	border-radius: 4px;
	line-height: inherit;
	&:focus,
  	&:active {
    outline: none;
  }
	
`

function SelectBox(props){
	const handleChange = (e) => {
		console.log(e.target.value);
	}
	return(
		<Select onChange={handleChange}>
			{props.options.map((option) => (
				<option
					key={option.value}
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</Select>
	);
}
export default SelectBox;