import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log(data);
       
	}
	

	return (
		<div className="text-center mt-5">
			<h1>Signup</h1>
            <div>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleSubmit}>Signup</button>
            </div>
		
		</div>
	);
};