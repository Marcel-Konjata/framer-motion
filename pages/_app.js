import App from "next/app";
import React from "react";
import { GlobalStyles } from "../styles/Global.styles";
import Layout from "./../layout/Layout";
import { AnimatePresence } from "framer-motion";

export default class MyApp extends App {
    render() {
        const { Component, pageProps, router } = this.props;
        return (
            <>
                <Layout>
                    <GlobalStyles />
                    <AnimatePresence exitBeforeEnter >
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
            </>
        );
    }
}
