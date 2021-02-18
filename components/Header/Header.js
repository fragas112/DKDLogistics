import classes from './header.module.scss';
import Link from 'next/link';
import Logo from '../../assets/logo2.webp';
import { useRouter } from 'next/router';
import { enUS, ru } from '../../translation';
import USAFlag from "../../public/usa.webp"
import RUFLAG from "../../public/ru.webp"

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
					<img className={classes.logo} src={Logo}></img>
				</Link>
				<ul className={classes.navitemsVisable}>
						<li href="/">{t.home}</li>
						<li href="/">{t.service}</li>
						<li href="/">{t.carrier}</li>
						<li onClick={() => changeLanguage('en')}><img className={classes.langLogo} src={USAFlag}></img></li>

						<li onClick={() => changeLanguage('ru')}><img className={classes.langLogo} src={RUFLAG}></img></li>
				</ul>

				<ul className={classes.navitems}>
					<MobileNav>
						<MobileNavList>
							<NavLinkItem>
								<li href="/">{t.home}</li>
								<li href="/">{t.service}</li>
								<li href="/">{t.carrier}</li>
								<li onClick={() => changeLanguage('en')}><img className={classes.langLogo} src={USAFlag}></img></li>

								<li onClick={() => changeLanguage('ru')}><img className={classes.langLogo} src={RUFLAG}></img></li>
							</NavLinkItem>
						</MobileNavList>
					</MobileNav>
				</ul>
			</nav>
		</div>
	);
}
