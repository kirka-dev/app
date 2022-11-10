import cn from "classnames";
import Link from "next/link";
import styles from "./logotype.module.scss";

function Logotype() {
  return (
    <Link href={'/'}>
      <h1 className={cn(styles.Logotype)}>Lascain</h1>
    </Link>
  )
}

export default Logotype
