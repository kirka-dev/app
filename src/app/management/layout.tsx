import cn from "classnames";
import Menu from "@components/common/menu";
import {ManagementMenuConst} from "@shared/consts/management-menu.const";
import {LayoutInterface} from "@shared/interfaces/layout.interface";
import styles from "@styles/Management.module.scss";

export default function ManagementLayout({children}: LayoutInterface) {
  return (
    <main className={cn(styles.Layout)}>
      <section>
        {children}
      </section>
      <aside>
        <Menu items={ManagementMenuConst}/>
      </aside>
    </main>
  );
}
