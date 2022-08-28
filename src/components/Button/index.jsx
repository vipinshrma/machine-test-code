import { Button as ButtonComp } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function Button({
	color,
	backgroundColor,
	label,
	handleClick,
	size,
}) {
	return (
		<ButtonComp
			style={{ backgroundColor: backgroundColor }}
			onClick={handleClick}
			size={size}
			color={color}
		>
			{label}
		</ButtonComp>
	);
}

Button.prototype = {
	label: PropTypes.string,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	color: PropTypes.oneOf([
		"primary",
		"secondary",
		"success",
		"error",
		"info",
		"warning",
	]),
	handleClick: PropTypes.func,
};
