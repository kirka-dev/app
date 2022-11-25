import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import StoresRepository from "@repositories/stores/stores.repository";
import {StoreInterface} from "@shared/interfaces/store.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: StoreInterface[]
}

const Stores = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(store =>
        <Card
          id={store.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await StoresRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Stores


