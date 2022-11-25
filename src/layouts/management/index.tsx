import {Fragment} from "react";
import cn from "classnames";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Menu from "@components/common/menu";
import Nav from "@components/common/nav";
import {ManagementMenuConst} from "@shared/consts/management-menu.const";
import {LayoutInterface} from "@shared/interfaces/layout.interface";
import styles from "./management.module.scss";

export default function ManagementLayout({ children }: LayoutInterface) {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <main className={cn(styles.Grid)}>
        <section>
          {children}
        </section>
        <aside>
          <Menu items={ManagementMenuConst}/>
        </aside>
      </main>
      <Footer/>
    </Fragment>
  )
}
