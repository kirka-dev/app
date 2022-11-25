import {Fragment} from "react";
import cn from "classnames";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Nav from "@components/common/nav";
import {LayoutInterface} from "@shared/interfaces/layout.interface";
import styles from "./product.module.scss";

export default function ProductLayout({ children }: LayoutInterface) {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <main className={cn(styles.Grid)}>
        <section>
          {children}
        </section>
        <aside>
          Filters
        </aside>
      </main>
      <Footer/>
    </Fragment>
  )
}
