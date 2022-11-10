import {Fragment} from "react";
import cn from "classnames";
import styles from "@styles/Management.module.scss";

const Messengers = async () => {
  const data = await getData();

  return (
    <Fragment>
      Messengers
    </Fragment>
  )
}

async function getData() {

}

export default Messengers
