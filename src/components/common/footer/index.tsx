import cn from "classnames";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={cn(styles.Footer)}>
      <div className={cn(styles.Footer__container)}>
        footer
      </div>
    </footer>
  )
}

export default Footer
