import React from "react";
import { Alert } from "react-bootstrap";
import icons from "./icons";

export default function Items(props) {
	return (
		<>
			<Alert variant="success" style={{ margin: "5px" }}>
				{icons.send} {props.value.query}
			</Alert>

			<Alert variant="primary" style={{ textAlign: "right" }}>
				{props.value.response}
				{icons.responding}
			</Alert>
		</>
	);
}
