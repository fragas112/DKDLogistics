import classes from './Layout.module.scss';
import { enUS, ru } from '../../translation';
import { useRouter } from 'next/router';
import newlanding from '../../assets/newlanding.webp';
export default function Layout(props) {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en-US' ? enUS : ru;
	return (
		<div className={classes.Layout}>
			<div className={classes.gifContainer}>
				{props.children}

				<div className={classes.container}>
				{/* <img src={newlanding} alt="Truck Image" /> */}

					<div className={classes.box}>

						<div className={classes.title}>
							<span className={classes.block}></span>
							<h1>
								THE BEST<span></span>
							</h1>
						</div>

						<div className={classes.role}>
							<div className={classes.block}></div>
							<p>IS THE LEAST WE CAN DO</p>
						</div>
					</div>
				</div>
			</div>

			{/* <NavBar /> */}
		</div>
	);
}
