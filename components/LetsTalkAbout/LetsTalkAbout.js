import classes from "./letsTalkAbout.module.scss";
import AliceCarousel from "react-alice-carousel";
import { enUS, ru } from "../../translation";
import { useRouter } from "next/router";
const LetsTalkAbout = () => {
  const router = useRouter();
  //Language Configs and Locale
  const { locale } = router;
  const t = locale === "en-US" ? enUS : ru;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <AliceCarousel
          controlsStrategy="responsive"
          autoPlay
          autoPlayInterval="4000"
          autoPlayDirection="rtl"
          disableDotsControls="true"
          disableButtonsControls="true"
          autoWidth="true"
          autoHeight="true"
          infinite
        >
          <div className={classes.fontContainer}>
            <a>
              <img src="" alt="Person"></img>
            </a>
            <h3>{t.talkAboutTitle}</h3>
            <p>{t.talkAboutText}</p>
            <div className={classes.lineWithText}>
              <span>&#8213; </span>
              <p>{t.talkAboutAuthor}</p>
            </div>
          </div>
          <div className={classes.fontContainer}>
            <a>
              <img src="" alt="Person"></img>
            </a>
            <h3>{t.talkAboutTitle}</h3>
            <p>{t.talkAboutText}</p>
            <div className={classes.lineWithText}>
              <span>&#8213; </span>
              <p>{t.talkAboutAuthor}</p>
            </div>
          </div>
        </AliceCarousel>
      </div>
    </div>
  );
};
export default LetsTalkAbout;
