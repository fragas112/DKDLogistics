import classes from "./Layout.module.scss";
import {enUS, ru} from '../../translation'
import {useRouter} from "next/router";
import newlanding from "../../assets/newlanding.webp"
export default function Layout (props){
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en-US" ? enUS : ru;
  return (
  <div className={classes.Layout}>
    <div className={classes.gifContainer}>
      <div className={classes.logoIntoGif}>
        {props.children}
        <div className={classes.textCollectionLandingPage}>
          <img src={newlanding} alt="Truck Image"/>
          <h1>{t.heroTitle}</h1>
          <p>
            {t.heroContentText}
          </p>
          <button>{t.heroSeeMore}</button>
        </div>
      </div>
    </div>

    {/* <NavBar /> */}
  </div>
  )
}