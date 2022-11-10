import cn from "classnames";
import Menu from "@components/common/menu";
import {ProfileMenuConst} from "@shared/consts/profile-menu.const";
import {LayoutInterface} from "@shared/interfaces/layout.interface";
import styles from "@styles/Profile.module.scss";

export default function ProfileLayout({children}: LayoutInterface) {
  return (
    <main className={cn(styles.Layout)}>
      <section>
        {children}
      </section>
      <aside>
        <Menu items={ProfileMenuConst}/>
      </aside>
    </main>
  );
}
