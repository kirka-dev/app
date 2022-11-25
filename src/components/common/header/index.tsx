import cn from "classnames";
import Link from "next/link";
import User from "@static/user.svg"
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={cn(styles.Header)}>
      <div className={cn(styles.Header__container)}>
        <div className={cn(styles.Header__logotype)}>
          Lascain
        </div>
        <div className={cn(styles.Header__menu)}>
          <Link href='/profile'>
            <User className={cn(styles.Header__icon)}/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
