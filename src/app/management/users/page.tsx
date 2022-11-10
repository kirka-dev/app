import {Fragment} from "react";
import cn from "classnames";
import styles from "@styles/Management.module.scss";

const Users = async () => {
  const data = await getData();

  return (
    <Fragment>
      Users
    </Fragment>
  )
}

async function getData() {

}

export default Users
