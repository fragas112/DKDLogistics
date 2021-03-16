import classes from "./footer.module.scss";
import { enUS, ru } from "../../translation";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? enUS : ru;
  return (
    <>
      <div className={classes.contentContainer}>
        <div className={classes.contentWrapper}>
          <div className={classes.footerSection1}>
            <div
              className={classes.contactBox}
              itemprop="address"
              itemScope
              itemtype="https://schema.org/PostalAddress"
            >
              <h3>{t.footerContact}</h3>
              <address itemprop="streetAddress">
                <img src="/location.png" alt="Location image"></img>
                7545 S MADISON ST,SUITE 301 Burr Ridge, IL, US 60527
              </address>
              <a href="tel:123-456-7890" itemprop="telephone">
                <img src="/phone.png" alt="phone Image to call us"></img>
                +1 708-870-2581
              </a>
              <a href="mailto: abc@example.com" itemprop="email">
                <img src="/email.png" alt="Email logo"></img>
                willie@dkdlogistics.com
              </a>
            </div>
          </div>

          <div className={classes.footerSection2}>
            <span>© 2021 DKD Logistics</span>
            <ul></ul>
            <div className={classes.Socials}>
              <a href="https://www.facebook.com/dkdlogistics">
                <img src="./fb.png" alt="facebook"></img>
              </a>
              <a>
                <img src="./instagram.png" alt="Instagram"></img>
              </a>
              <a>
                <img src="./youtube.png" alt="YouTube"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
