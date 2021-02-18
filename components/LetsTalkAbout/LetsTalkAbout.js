import classes from './letsTalkAbout.module.scss';
import AliceCarousel from 'react-alice-carousel';



const LetsTalkAbout = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<AliceCarousel
					controlsStrategy="responsive"
					autoPlay
					autoPlayInterval="5000"
					autoPlayDirection="rtl"
					disableDotsControls="true"
					disableButtonsControls="true"
					autoWidth="true"
					autoHeight="true"
					infinite
				>
					<div className={classes.fontContainer}>
						<a>
							<img src=""></img>
						</a>
						<h3>Drivers Talk</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
						<div className={classes.lineWithText}>
							<span>&#8213; </span>
							<p>Ernestas Luza</p>
						</div>
					</div>
					<div className={classes.fontContainer}>
						<a>
							<img src=""></img>
						</a>
						<h3>Drivers Talk</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
						<div className={classes.lineWithText}>
							<span>&#8213; </span>
							<p>Ernestas Luza</p>
						</div>
					</div>
				</AliceCarousel>
			</div>
		</div>
	);
};
export default LetsTalkAbout;
