import dynamic from 'next/dynamic'

import classes from '../components/assets/sass/Home.module.scss';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

export default function Home() {
	const WorkingWith = dynamic(()=> import('../components/WorkingWith/WorkingWIth'), { loading: () => <p>...</p>})
	const LetsTalkAbout = dynamic(()=> import('../components/LetsTalkAbout/LetsTalkAbout'), { loading: () => <p>...</p>})
	const ContactForm = dynamic(() => import('../components/ContactForm/contactForm'), { loading: () => <p>...</p>})
	const Footer = dynamic(() => import('../components/Footer/Footer'), { loading: () => <p>...</p>})
	const AboutUs = dynamic(() => import('../components/AboutUs/AboutUs'), { loading: () => <p>...</p>})
	const Feature = dynamic(() => import('../components/Feature/Feature'), { loading: () => <p>...</p>})



	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			></link>
			<Layout>
				<Header />
				<div className={classes.gifContainer}></div>
			</Layout>
			<Feature />
			<AboutUs />
			<WorkingWith />
			<LetsTalkAbout />
			<ContactForm />
			<Footer />


		</>
	);
}
