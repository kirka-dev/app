import React from "react";
import cn from "classnames";
import '../styles/globals.scss';
import Header from "@components/common/header";
import Navigation from "@components/common/navigation";
import Footer from "@components/common/footer";
import styles from "@styles/Home.module.scss";

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={cn(styles.Layout)}>
        <Header/>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
