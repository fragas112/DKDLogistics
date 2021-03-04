import React, { useState } from "react";
import classes from "./contactForm.module.scss";
import { enUS, ru } from "../../translation";
import { useRouter } from "next/router";
const ContactForm = () => {
  const router = useRouter();
  //Language Configs and Locale
  const { locale } = router;
  const t = locale === "en-US" ? enUS : ru;
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    sendEmail();
    togglePopup();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    fetch("/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        res.status === 200
          ? "Message have been sent!"
          : "Something went wrong...";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section id="contentForm">
      <>
        <div className={classes.contentContainer}>
          <div className={classes.contentWrapper}>
            {isOpen ? (
              <div className={classes.backgroundForm}>
                <button onClick={togglePopup} className={classes.closeBtn}>
                  X
                </button>
                <h2>{t.contactFormTitle}</h2>
                <form onSubmit={handleSubmit}>
                  <span className={classes.inputName}>
                    {t.contactFormFullName}
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contactFormName}
                    onChange={updateInput}
                    value={formData.name || ""}
                    required
                  />

                  <span className={classes.inputName}>
                    {t.contactFormEmailTitle}
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contactFormEmail}
                    onChange={updateInput}
                    value={formData.email || ""}
                    required
                  />
                  <span className={classes.inputName}>
                    {t.contactFormAbout}
                  </span>
                  <textarea
                    type="text"
                    name="message"
                    placeholder={t.contactFormMessage}
                    onChange={updateInput}
                    value={formData.message || ""}
                    required
                  ></textarea>

                  <button className={classes.submitBtn} type="submit">
                    {t.contactFormSubmit}
                  </button>
                </form>
              </div>
            ) : (
              <div className={classes.succBox}>
                {submitted === true ? (
                  <div className={classes.success}>{t.contactFormSuccess}</div>
                ) : (
                  <div className={classes.pointer}>
                    <div onClick={togglePopup} className={classes.logoText}>
                      <i className="fa fa-envelope"></i>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    </section>
  );
};

export default ContactForm;
