import classes from "./header.module.scss";
import Link from "next/link";
import Logo from "../../assets/logo2.webp";
import { useRouter } from "next/router";
import { enUS, ru } from "../../translation";
import USAFlag from "../../public/usa.webp";
import RUFLAG from "../../public/ru.webp";

import MobileNav from "../Header/MobileNav/MobileNav";
import MobileNavList from "./MobileNavList/MobileNavList";
import NavLinkItem from "./MobileNavItem/MobileNavItem";
export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? enUS : ru;
  const changeLanguage = (lang) => {
    if (lang === "en") {
      router.push("/", "/", { locale: "en-US" });
    } else if (lang === "ru") {
      router.push("/", "/", { locale: "ru" });
    }
  };

  return (
    <div className={classes.container}>
      <nav>
        <Link href="/">
          <img
            className={classes.logo}
            src={Logo}
            alt="Company Logo DKD Logistics"
          ></img>
        </Link>
        <ul
          className={classes.navitemsVisable}
          itemScope
          itemtype="https://schema.org/BreadcrumbList"
        >
          <li
            itemprop="itemListElement"
            itemScope
            itemtype="https://schema.org/ListItem"
          >
            <a href="/" itemprop="item">
              {t.home}
            </a>
          </li>
          <li
            itemprop="itemListElement"
            itemScope
            itemtype="https://schema.org/ListItem"
          >
            <a href="#aboutUs" itemprop="item">
              {t.service}
            </a>
          </li>
          <li
            itemprop="itemListElement"
            itemScope
            itemtype="https://schema.org/ListItem"
          >
            <a href="#contentForm" itemprop="item">
              {t.carrier}
            </a>
          </li>
          <li
            onClick={() => changeLanguage("en")}
            itemprop="itemListElement"
            itemScope
            itemtype="https://schema.org/ListItem"
          >
            <img
              className={classes.langLogo}
              src={USAFlag}
              alt="USA flag"
            ></img>
          </li>

          <li
            onClick={() => changeLanguage("ru")}
            itemprop="itemListElement"
            itemScope
            itemtype="https://schema.org/ListItem"
          >
            <img
              className={classes.langLogo}
              src={RUFLAG}
              alt="Russian flag"
            ></img>
          </li>
        </ul>

        <ul className={classes.navitems}>
          <MobileNav>
            <MobileNavList>
              <NavLinkItem>
                <li
                  itemprop="itemListElement"
                  itemScope
                  itemtype="https://schema.org/ListItem"
                >
                  <a href="/" itemprop="item">
                    {t.home}
                  </a>
                </li>
                <li
                  itemprop="itemListElement"
                  itemScope
                  itemtype="https://schema.org/ListItem"
                >
                  <a href="#aboutUs" itemprop="item">
                    {t.service}
                  </a>
                </li>
                <li
                  itemprop="itemListElement"
                  itemScope
                  itemtype="https://schema.org/ListItem"
                >
                  <a href="#contentForm" itemprop="item">
                    {t.carrier}
                  </a>
                </li>
                <li
                  onClick={() => changeLanguage("en")}
                  itemprop="itemListElement"
                  itemScope
                  itemtype="https://schema.org/ListItem"
                >
                  <img
                    className={classes.langLogo}
                    alt="USA flag"
                    src={USAFlag}
                  ></img>
                </li>

                <li
                  onClick={() => changeLanguage("ru")}
                  itemprop="itemListElement"
                  itemScope
                  itemtype="https://schema.org/ListItem"
                >
                  <img
                    className={classes.langLogo}
                    alt="Russian flag"
                    src={RUFLAG}
                  ></img>
                </li>
              </NavLinkItem>
            </MobileNavList>
          </MobileNav>
        </ul>
      </nav>
    </div>
  );
}
