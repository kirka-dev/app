import cn from "classnames";
import styles from "./card.module.scss";

interface CardInterface {
  id?: number;
  name?: string;
  displayName?: string;
}

function Card({id}: CardInterface) {
  return (
    <div className={cn(styles.Card)}>
      {id}
    </div>
  )
}

export default Card
