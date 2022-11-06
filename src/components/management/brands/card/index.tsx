import styles from "./card.module.scss";
import cn from "classnames";
import {BrandInterface} from "../../../../shared/interfaces/brand.interface";

interface CardInterface {
  data: BrandInterface
}

function Card({data}: CardInterface) {
  return (
    <div className={cn(styles.Card)}>
      {data.displayName}
      {data.name}
    </div>
  )
}

export default Card
