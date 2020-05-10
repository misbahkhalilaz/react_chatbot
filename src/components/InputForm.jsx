import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import icons from "./icons";
import { sendQuery } from "../redux/actionCreaters";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function InputForm(props) {
	const [value, setValue] = useState("");
	const inputRef = React.createRef();
	useEffect(() => inputRef.current.focus());
	return (
		<InputGroup className="mb-3">
			<FormControl
				type="text"
				as="input"
				placeholder="Ask Something..."
				ref={inputRef}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<InputGroup.Append>
				<Button
					disabled={value === "" ? true : false}
					onClick={() => {
						props.dispatch(sendQuery(inputRef.current.value, props.dispatch));
						setValue("");
						inputRef.current.focus();
					}}
				>
					{props.flag ? icons.responding : icons.send}
				</Button>
			</InputGroup.Append>
		</InputGroup>
	);
}

export default connect((state) => ({
	flag: state.isFetching,
}))(InputForm);
