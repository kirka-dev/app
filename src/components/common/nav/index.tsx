import cn from "classnames";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={cn(styles.Nav)}>
      <div className={cn(styles.Nav__container)}>
        nav
      </div>
    </nav>
  )
}

export default Nav
