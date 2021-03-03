import classes from './header.module.scss';
import Link from 'next/link';
import Logo from '../../assets/logo2.webp';
import { useRouter } from 'next/router';
import { enUS, ru } from '../../translation';
import USAFlag from '../../public/usa.webp';
import RUFLAG from '../../public/ru.webp';

import MobileNav from '../Header/MobileNav/MobileNav';
import MobileNavList from './MobileNavList/MobileNavList';
import NavLinkItem from './MobileNavItem/MobileNavItem';
export default function Header() {
	const router = useRouter();
	//Language Configs and Locale
	const { locale } = router;
	const t = locale === 'en-US' ? enUS : ru;
	const changeLanguage = (lang) => {
		if (lang === 'en') {
			router.push('/', '/', { locale: 'en-US' });
		} else if (lang === 'ru') {
			router.push('/', '/', { locale: 'ru' });
		}
	};

	return (
		<div className={classes.container}>
			<nav>
				<Link href="/">
					<img className={classes.logo} src={Logo} alt="Company Logo DKD Logistics"></img>
				</Link>
				<ul className={classes.navitemsVisable}>
					<li>
						<a href="/">{t.home}</a>
					</li>
					<li>
						<a href="#aboutUs">{t.service}</a>
					</li>
					<li>
						<a href="#contentForm">{t.carrier}</a>
					</li>
					<li onClick={() => changeLanguage('en')}>
						<img className={classes.langLogo} src={USAFlag} alt="USA flag"></img>
					</li>

					<li onClick={() => changeLanguage('ru')}>
						<img className={classes.langLogo} src={RUFLAG} alt="Russian flag"></img>
					</li>
				</ul>

				<ul className={classes.navitems}>
					<MobileNav>
						<MobileNavList>
							<NavLinkItem>
								<li>
									<a href="/">{t.home}</a>
								</li>
								<li>
									<a href="#aboutUs">{t.service}</a>
								</li>
								<li>
									<a href="#contentForm">{t.carrier}</a>
								</li>
								<li onClick={() => changeLanguage('en')}>
									<img className={classes.langLogo} alt="USA flag" src={USAFlag}></img>
								</li>

								<li onClick={() => changeLanguage('ru')}>
									<img className={classes.langLogo} alt="Russian flag" src={RUFLAG}></img>
								</li>
							</NavLinkItem>
						</MobileNavList>
					</MobileNav>
				</ul>
			</nav>
		</div>
	);
}
