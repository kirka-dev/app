import {Fragment} from "react";
import cn from "classnames";
import Footer from "@components/common/footer";
import Header from "@components/common/header";
import Menu from "@components/common/menu";
import Nav from "@components/common/nav";
import {ProfileMenuConst} from "@shared/consts/profile-menu.const";
import {LayoutInterface} from "@shared/interfaces/layout.interface";
import styles from "@layouts/management/management.module.scss";

export default function ProfileLayout({ children }: LayoutInterface) {
  return (
    <Fragment>
      <Header/>
      <Nav/>
      <main className={cn(styles.Grid)}>
        <section>
          {children}
        </section>
        <aside>
          <Menu items={ProfileMenuConst}/>
        </aside>
      </main>
      <Footer/>
    </Fragment>
  )
}
