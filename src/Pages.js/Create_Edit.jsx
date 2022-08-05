import React from "react";
import { useState } from "react";

const URL = "http://localhost:3030";

function CreateProfile() {
	 const [formData, setFormData] = useState({});
	// const [formData, setFormData] = useState("");
	// const [aboutData, setAboutData] = useState({});
	// const [linkedInData, setLinkedInData] = useState({});
	// const [twitterData, setTwitterData] = useState({});
	// const [ccData, setCcData] = useState({});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("formData:", formData);

		//const body = {};
		const options = {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await fetch(`${URL}/profiles/save`, options);
		const data = await res.json();
		// TODO Redirect user to profile creation page
		console.log("Data from Server", data);
	};
	return (
		<div>
			<h2>Create/Edit </h2>
			<form onSubmit={handleSubmit}>
				<label for="email">Email*: </label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<label for="fullName">Full Name*: </label>
				<input
					type="text"
					name="fullName"
					value={formData.fullName}
					onChange={handleChange}
					required
				/>
				<label for="id">ID: </label>
				<input
					type="text"
					name="id"
					value={formData.id}
					onChange={handleChange}
					required
				/>
				<label for="about">About: </label>
				<input
					type="text"
					name="about"
					value={formData.about || ""}
					onChange={handleChange}
					required
				/>
				<label for="linkedIn">LinkedIn: </label>
				<input
					type="text"
					name="linkedIn"
					value={formData.linkedIn || ""}
					onChange={handleChange}
					required
				/>
				<label for="twitter">Twitter: </label>
				<input
					type="text"
					name="twitter"
					value={formData.twitter || ""}
					onChange={handleChange}
					required
				/>
				<label for="cohort">CC Cohort: </label>
				<input
					type="text"
					name="cohort"
					value={formData.cohort || ""}
					onChange={handleChange}
					required
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default CreateProfile;
