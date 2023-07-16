import React, { useState, useCallback } from "react";

const Homepage = () => {
	const [email, setEmail] = useState("");
	const [chatBox, setChatBox] = useState("");

	const submitHandler = useCallback(
		(e) => {
			e.preventDefault();
			console.log({
				email,
				chatBox,
			});
		},
		[email, chatBox]
	);

	return (
		<div className="main">
			<form className="main" onSubmit={submitHandler}>
				<h1>CodeCall</h1>
				<div className="container">
					<div>Email</div>
					<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<div>Room</div>
					<input type="number" id="chatBox" value={chatBox} onChange={(e) => setChatBox(e.target.value)} />
				</div>
				<button className="submitBtn">Submit</button>
			</form>
		</div>
	);
};

export default Homepage;
