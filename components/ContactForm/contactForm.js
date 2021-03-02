import React, { useEffect, useState } from 'react';
import classes from './contactForm.module.scss';

const ContactForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({});
	const [submitted, setSubmitted] = useState(false);

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
		setSubmitted(true);
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
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((res) => {
				res.status === 200 ? 'Message have been sent!' : 'Something went wrong...';
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<section id="contentForm">
			<>
				<div className={classes.contentContainer}>
					<div className={classes.contentWrapper}>
						{isOpen ? (
							<div className={classes.backgroundForm}>
								<button onClick={togglePopup} className={classes.closeBtn}>
									X
								</button>
								<h2>Apply Now</h2>
								<form onSubmit={handleSubmit}>
									<span className={classes.inputName}>Your Full Name</span>
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
										required
									/>
									<span className={classes.inputName}>Message About You</span>
									<textarea
										type="text"
										name="message"
										placeholder="Your message here..."
										onChange={updateInput}
										value={formData.message || ''}
										required
									></textarea>

									<button className={classes.submitBtn} type="submit">
										Submit
									</button>
								</form>
							</div>
						) : (
							<div className={classes.succBox}>
								{submitted === true ? (
									<div className={classes.success}>
										Success! Thank you for applying! We will contact you!
									</div>
								) : (
									<div className={classes.pointer}>
										<div onClick={togglePopup} className={classes.logoText}>
											<i className="fa fa-envelope"></i>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</>
		</section>
	);
};

export default ContactForm;
