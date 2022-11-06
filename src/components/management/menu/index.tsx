import styles from "./menu.module.scss";
import cn from "classnames";
import Link from "next/link";

function Menu() {
  return (
    <div>
      <Link href={'/profile'}>Profile</Link>
    </div>
  )
}

export default Menu
