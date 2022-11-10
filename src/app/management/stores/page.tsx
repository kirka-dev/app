import {Fragment} from "react";
import cn from "classnames";
import styles from "@styles/Management.module.scss";

const Stores = async () => {
  const data = await getData();

  return (
    <Fragment>
      Stores
    </Fragment>
  )
}

async function getData() {

}

export default Stores
