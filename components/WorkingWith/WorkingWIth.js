import classes from "./workingWith.module.scss";
import { enUS, ru } from "../../translation";
import { useRouter } from "next/router";
import logo1 from "../../assets/workwithLogo/Amazon-logo-black-template.webp";
import logo2 from "../../assets/workwithLogo/new-budweiser-logo.webp";

import AliceCarousel from "react-alice-carousel";

const WorkingWith = () => {
  const router = useRouter();
  //Language Configs and Locale
  const { locale } = router;
  const t = locale === "en-US" ? enUS : ru;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.textContainer}>
          <h2>{t.workingWithTitle}</h2>
        </div>
        <div className={classes.workingWithLogos}>
          <AliceCarousel
            controlsStrategy="responsive"
            autoPlay
            autoPlayInterval="3000"
            autoPlayDirection="rtl"
            disableDotsControls="true"
            disableButtonsControls="true"
            autoWidth="true"
            autoHeight="true"
            infinite
          >
            <img
              alt="Partners LOGO"
              src={logo1}
              className={classes.sliderimg}
            />
            <img
              alt="Partners LOGO"
              src={logo2}
              className={classes.sliderimg}
            />
            <img
              alt="Partners LOGO"
              src={logo1}
              className={classes.sliderimg}
            />
            <img
              alt="Partners LOGO"
              src={logo2}
              className={classes.sliderimg}
            />
            <img
              alt="Partners LOGO"
              src={logo1}
              className={classes.sliderimg}
            />
            <img
              alt="Partners LOGO"
              src={logo1}
              className={classes.sliderimg}
            />
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default WorkingWith;
