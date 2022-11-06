import styles from "./menu.module.scss";
import cn from "classnames";
import Link from "next/link";

function Menu() {
  return (
    <div>
      <Link href={'/management'}>Management</Link>
    </div>
  )
}

export default Menu
