import {Fragment} from "react";
import cn from "classnames";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Nav from "@components/common/nav";
import {LayoutInterface} from "@shared/interfaces/layout.interface";
import styles from "./catalog.module.scss";

export default function CatalogLayout({ children }: LayoutInterface) {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <main className={cn(styles.Grid)}>
        <aside>
          Filters
        </aside>
        <section>
          {children}
        </section>
      </main>
      <Footer/>
    </Fragment>
  )
}
