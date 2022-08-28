import React from "react";
import { Typography as Text } from "@mui/material";

export default function Typography({ handleClick, label, color, size }) {
	return (
		<Text
			sx={{
				overflow: "hidden",
				textOverflow: "ellipsis",
				display: "-webkit-box",
				WebkitLineClamp: "2",
				WebkitBoxOrient: "vertical",
			}}
			onClick={handleClick}
			style={{ color: color }}
			fontSize={size}
		>
			{label}
		</Text>
	);
}
