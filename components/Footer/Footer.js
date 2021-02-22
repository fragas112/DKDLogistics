import classes from './footer.module.scss';
const ContactForm = () => {
	return (
		<>
			<div className={classes.contentContainer}>
				<div className={classes.contentWrapper}>
					<div className={classes.footerSection1}>
						{/* <div className={classes.contactBox}>
						<h4>Central Asia Office</h4>
						<address>
						<img src="/location.png"></img>
						Some Street, No. 100
						</address>
						<a href="tel:123-456-7890">
						<img src="/phone.png"></img>
						123-456-7890
						</a>
						<a href = "mailto: abc@example.com">
						<img src="/email.png"></img>
							abc@example.com
							</a>
						</div> */}
						<div className={classes.contactBox}>
							<h4>CONTACTS</h4>
							<address>
								<img src="/location.png"></img>
								7545 S MADISON ST,SUITE 301 Burr Ridge, IL, US 60527
							</address>
							<a href="tel:123-456-7890">
								<img src="/phone.png"></img>
								+1 708-870-2581
							</a>
							<a href="mailto: abc@example.com">
								<img src="/email.png"></img>
								willie@dkdlogistics.com
							</a>
						</div>
						{/* <div className={classes.contactBox}>
						<h4>European Office</h4>
						<address>
						<img src="/location.png"></img>
						Some Street, No. 100
						</address>
						<a href="tel:123-456-7890">
						<img src="/phone.png"></img>
						123-456-7890
						</a>
						<a href = "mailto: abc@example.com">
						<img src="/email.png"></img>
							abc@example.com
							</a>
						</div> */}
					</div>

					<div className={classes.footerSection2}>
						<span>© 2021 DKD Logistics</span>
						<ul>
						</ul>
						<div className={classes.Socials}>
							<a href="https://www.facebook.com/dkdlogistics">
								<img src="./fb.png"></img>
							</a>
							<a>
								<img src="./instagram.png"></img>
							</a>
							<a>
								<img src="./youtube.png"></img>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactForm;
