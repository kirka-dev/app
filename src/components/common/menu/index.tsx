import cn from "classnames";
import Link from "next/link";
import {MenuInterface} from "@shared/interfaces/menu.interface";
import styles from "./menu.module.scss";

const Menu = ({items}: MenuInterface) => {
  return (
    <div className={cn(styles.Menu)}>
      {items && items.map(item => <Link href={item.href}>{item.title}</Link>)}
    </div>
  )
}

export default Menu
