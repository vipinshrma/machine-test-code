import React from "react";
import { TextField } from "@mui/material";
export default function Input({
	placeholder,
	name,
	handleChange,
	value,
	handleBlur,
	focus,
}) {
	return (
		<TextField
			placeholder={placeholder}
			name={name}
			onChange={handleChange}
			value={value}
			size="small"
			onBlur={handleBlur}
			focused={focus}
		/>
	);
}
