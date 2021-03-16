import App from "next/app";
import React from "react";
import "../styles/globals.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Head from "../utils/head";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps;
    // Ensure getInitialProps gets called on our child pages
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head />
        <Component {...pageProps} />
        <MessengerCustomerChat
          pageId="101346851589315"
          appId="476548413754030"
        />
      </>
    );
  }
}
export default MyApp;
