import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = ()=> {

		const opts = {
			method: "POST",
			Headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				"email": email,
				"password": password,
			})
		}
		fetch("https://bug-free-xylophone-q77655j6p7jrhxxpr-3000.app.github.dev/api/token", opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("there was an error");
			})
			.then()
			.catch(error =>{
				console.error("")
			})
	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
            <div>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleClick}>Login</button>
            </div>
		
		</div>
	);
};