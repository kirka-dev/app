import Link from "next/link";
import cn from "classnames";
import styles from "./header.module.scss";
import Logotype from "@components/common/logotype";
import {RoutesEnum} from "@shared/enums/routes.enum";

function Header() {
  return (
    <header className={cn(styles.Header)}>
      <div className={styles.Header__logotype}>
        <Logotype/>
      </div>
      <div className={styles.Header__menu}>
        <Link href={RoutesEnum.PROFILE}>Профиль</Link>
      </div>
    </header>
  )
}

export default Header
