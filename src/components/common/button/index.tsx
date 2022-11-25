import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonInterface {
  type?: "button" | "submit" | "reset" | undefined,
  title: string,
  click?: () => {},
}

const Input = ({type, title, click}: ButtonInterface) => {
  return (
    <div className={cn(styles.Button)}>
      <button type={type || 'button'} onClick={click}>{title}</button>
    </div>
  )
}

export default Input
