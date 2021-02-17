import React, { useState } from 'react';
import axios from 'axios';
import classes from './contactForm.module.scss';

const ContactForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({});

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};
	const updateInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		sendEmail();
		togglePopup();
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};
	const sendEmail = () => {
	    fetch('/contact', {
			method: 'post',
			headers: {
			  'Accept': 'application/json, text/plain, */*',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		}).then((res) => {
			res.status === 200 ? this.setState({ submitted: true }) : ''
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<div className={classes.contentContainer}>
				<div className={classes.contentWrapper}>
					{isOpen ? (
						<div className={classes.backgroundForm}>
							<button onClick={togglePopup} className={classes.closeBtn}>
								X
							</button>
							<h2>Contact Us</h2>
							<form onSubmit={handleSubmit}>
								<span className={classes.inputName}>Your Name</span>
								<input
									type="text"
									name="name"
									placeholder="Name"
									onChange={updateInput}
									value={formData.name || ''}
									required
								/>
								<span className={classes.inputName}>Your Email</span>
								<input
									type="email"
									name="email"
									placeholder="Email"
									onChange={updateInput}
									value={formData.email || ''}
								/>
								<span className={classes.inputName}>Your Message</span>
								<textarea
									type="text"
									name="message"
									placeholder="Your message here..."
									onChange={updateInput}
									value={formData.message || ''}
								></textarea>
								<button className={classes.submitBtn} type="submit">
									Submit
								</button>
							</form>
						</div>
					) : (
						<div className={classes.pointer}>
							<div onClick={togglePopup} className={classes.logoText}>
								<i className="fa fa-envelope"></i>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ContactForm;
