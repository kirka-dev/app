import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import ProductsRepository from "@repositories/products/products.repository";
import {ProductInterface} from "@shared/interfaces/product.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: ProductInterface[]
}

const Products = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(product =>
        <Card
          id={product.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await ProductsRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Products


