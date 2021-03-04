// import '../styles/globals.css'
// import "react-alice-carousel/lib/scss/alice-carousel.scss";
// import MessengerCustomerChat from 'react-messenger-customer-chat';

// function MyApp({ Component, pageProps }) {
//   <>
//   <MessengerCustomerChat
//     pageId="101346851589315"
//     appId="476548413754030"
//   />
//   </>
//   return <Component {...pageProps} />
// }

// export default MyApp

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
// <!-- Load Facebook SDK for JavaScript -->
// <div id="fb-root"></div>
// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       xfbml            : true,
//       version          : 'v9.0'
//     });
//   };

//   (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));</script>

//     <!-- Your Chat Plugin code -->
//     <div class="fb-customerchat"
//       attribution="setup_tool"
//       page_id="101346851589315"
// theme_color="#e68585">
//     </div>
// <!-- Load Facebook SDK for JavaScript -->
// <div id="fb-root"></div>
// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       xfbml            : true,
//       version          : 'v9.0'
//     });
//   };

//   (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));</script>

//     <!-- Your Chat Plugin code -->
//     <div class="fb-customerchat"
//       attribution="setup_tool"
//       page_id="101346851589315"
// theme_color="#e68585">
//     </div>
