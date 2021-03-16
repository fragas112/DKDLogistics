import classes from './aboutUs.module.scss';
import { enUS, ru } from '../../translation';
import { useRouter } from 'next/router';

const Feature = () => {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en-US' ? enUS : ru;
	return (
		<section id="aboutUs">
			<div className={classes.container}>
				<div className={classes.wrapper}>
					<div className={classes.aboutUsTextContainer}>
						<h3>{t.aboutUsSmallTitle}</h3>
						<h2>{t.aboutUsMainTitle}</h2>
						<p>{t.aboutUsContentText}</p>
						<button>{t.aboutUsButtonText}</button>
					</div>
					<div className={classes.aboutUsImageContainer}>
						<div className={classes.sideImages}>
							<div className={classes.aboutUsImageContainer1}>
								<div className={classes.aboutUsImage1}></div>
							</div>
							<div className={classes.aboutUsImageContainer2}>
								<div className={classes.aboutUsImage2}></div>
							</div>
							<div className={classes.aboutUsImageContainer3}>
								<div className={classes.aboutUsImage3}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Feature;
