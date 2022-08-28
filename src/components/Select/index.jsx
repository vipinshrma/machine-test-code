import {
	FormControl,
	InputLabel,
	MenuItem,
	Select as SelectComp,
} from "@mui/material";
import React from "react";

export default function Select({
	label,
	options,
	value = "M",
	handleChange,
	name,
}) {
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">{label}</InputLabel>
			<SelectComp
				labelId="demo-simple-Select-label"
				id="demo-simple-select"
				value={value}
				label={label}
				name={name}
				onChange={handleChange}
			>
				{options?.map((option) => {
					return <MenuItem value={option.value}>{option.label}</MenuItem>;
				})}
			</SelectComp>
		</FormControl>
	);
}
