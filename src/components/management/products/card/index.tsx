import cn from "classnames";
import styles from "./card.module.scss";

interface CardInterface {
  id?: number;
  name?: string;
  displayName?: string;
}

function Card({id, name, displayName}: CardInterface) {
  return (
    <div className={cn(styles.Card)}>
      {displayName}
      {name}
    </div>
  )
}

export default Card
