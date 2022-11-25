import {Fragment} from "react";
import Head from "next/head";
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head/>
      <Component {...pageProps} />
    </Fragment>
  )
}
