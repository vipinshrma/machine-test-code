import { Alert, Snackbar } from "@mui/material";
import React from "react";

export default function SnackbarToast({
	message = "this is message",
	messageType,
	isOpen,
}) {
	return (
		<Snackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			open={isOpen}
			// onClose={handleClose}
			// key={vertical + horizontal}
			autoHideDuration={6000}
		>
			<Alert severity={messageType}>{message}</Alert>
		</Snackbar>
	);
}
