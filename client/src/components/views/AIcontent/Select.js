import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Select = styled.select`
	display: block;
	width: 100px;
	height: 35px;
	padding: 8px 8px;
	font-size: inherit;
	border:1px solid;
	border-radius: 4px;
	line-height: inherit;
	margin-top: 10px;
	&:focus,
  	&:active {
    outline: none;
  }
	
`

function SelectBox(props){

	const navigate = useNavigate();
	const handleChange = (e) => {
		
		navigate(e.target.value);
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