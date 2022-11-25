import {Fragment} from "react";
import cn from "classnames";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Nav from "@components/common/nav";
import {LayoutInterface} from "@shared/interfaces/layout.interface";
import styles from "./home.module.scss";

export default function HomeLayout({ children }: LayoutInterface) {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <main className={cn(styles.Grid)}>
        <section>
          {children}
        </section>
      </main>
      <Footer/>
    </Fragment>
  )
}
