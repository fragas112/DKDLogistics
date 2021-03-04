import React from "react";
import Head from "next/head";

export default () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viendewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no"
      />
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="%PUBLIC_URL%/favicon/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      <title>DKDLogistics</title>
    </Head>
  );
};
