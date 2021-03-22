import classes from "./feature.module.scss";
import {enUS, ru} from '../../translation'
import {useRouter} from "next/router";
const Feature = () => {
  const router = useRouter();
  //Language Configs and Locale
  const {locale} = router;
  const t = locale === "en-US" ? enUS : ru;
  return (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes.circle1}>
          <div className={classes.imageTruck} />
        </div>
        <h3 >{t.featureBoxTextHeader1}</h3>
        <p>{t.featureBoxText1}</p>
      </div>
      <div className={classes.card}>
        <div className={classes.circle1}>
          <div className={classes.imageTruck2} />
        </div>
        <h3 >{t.featureBoxTextHeader2}</h3>
        <p>{t.featureBoxText2}</p>
      </div>
      <div className={classes.card}>
        <div className={classes.circle1}>
          <div className={classes.imageTruck3} />
        </div>
        <h3 >{t.featureBoxTextHeader3}</h3>
        <p>{t.featureBoxText3}</p>
      </div>
    </div>
  </div>
  )
  };

export default Feature;