import React, { useEffect } from "react";
import { connect } from "react-redux";
import Items from "./ListItems";

function List(props) {
	const msgEnd = React.createRef();
	useEffect(() => msgEnd.current.scrollIntoView({ behaviour: "smooth" }));
	return (
		<>
			{props.thread.map((chat) => (
				<Items value={chat} key={Math.random() * 100} />
			))}
			<div ref={msgEnd}></div>
		</>
	);
}

export default connect((state) => ({ thread: state.chat }))(List);
