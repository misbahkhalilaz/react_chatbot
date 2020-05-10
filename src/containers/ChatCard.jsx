import React from "react";
import { Card } from "react-bootstrap";
import InputForm from "../components/InputForm";
import List from "../components/CreateList";

export default function ChatCard(props) {
	return (
		<Card id="card">
			<Card.Header>
				<h1 style={{ textAlign: "center" }}>Boty</h1>
			</Card.Header>
			<Card.Body
				style={{
					scrollBehavior: "smooth",
					maxHeight: "480px",
					minHeight: "480px",
					overflow: "auto",
				}}
			>
				<List />
			</Card.Body>
			<Card.Footer>
				<InputForm />
			</Card.Footer>
		</Card>
	);
}
