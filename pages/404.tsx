/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import Head from "next/head";
import React from "react";
import Router from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Oopsie, 404! | Genemator's</title>
        <meta property="og:title" content="404 Whoopie!" />
        <meta
          property="og:description"
          content="This page's preview is not available as this page doesn't exist"
        />
      </Head>
      <Header subtitle="404" />
      <div className="h-auto">
        <div className="flex mb-4 justify-center mt-64">
          <div className="text-black text-center text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-black hover:text-white">
            404
          </div>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="text-black text-center xl:text-3xl lg:text-2xl text-1xl">
            Stay stunned for new updates...
          </div>
        </div>
        <div className="flex mb-4 justify-center mb-64">
          <a
            onClick={() => Router.back()}
            className="text-black text-center xl:text-3xl lg:text-2xl text-1xl hover:underline cursor-pointer"
          >
            {"<-"} Go back to git stage 🖤
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
