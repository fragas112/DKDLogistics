import classes from "../components/assets/sass/Home.module.scss";
import Header from "../components/Header/Header";
import Feature from "../components/Feature/Feature";
import AboutUs from "../components/AboutUs/AboutUs";
import WorkingWith from "../components/WorkingWith/WorkingWIth"
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/contactForm";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Layout>
        <Header />
        <div className={classes.gifContainer}></div>
      </Layout>
      <Feature />
      <AboutUs />
      <WorkingWith />
      <ContactForm />
      <Footer />

    </>
  );
}
