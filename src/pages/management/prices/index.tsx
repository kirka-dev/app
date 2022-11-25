import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import PricesRepository from "@repositories/prices/prices.repository";
import {PriceInterface} from "@shared/interfaces/price.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: PriceInterface[]
}

const Price = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(price =>
        <Card
          id={price.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await PricesRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Price


