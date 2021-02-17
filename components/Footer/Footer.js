import classes from './footer.module.scss';
const ContactForm = () => {
	return (
		<>
			<div className={classes.contentContainer}>
				<div className={classes.contentWrapper}>
					<div className={classes.footerSection1}>
						<div className={classes.contactBox}>
						<h4>Central America Office</h4>
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
						</div>
						<div className={classes.contactBox}>
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
						</div>
						<div className={classes.contactBox}>
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
						</div>
					
                    </div>
			
					<div className={classes.footerSection2}>
					<span>© 2021 DKD Logistics</span>
					<ul> 
                            <li>Web design</li>
                            <li>Development</li>
                            <li>Hosting</li>

                        </ul>
					<div className={classes.Socials}>
						<a><img src="./fb.png"></img></a>
						<a><img src="./twitter.png"></img></a>
						<a><img src="./youtube.png"></img></a>
					</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ContactForm;
