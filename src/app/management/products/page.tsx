import {Fragment} from "react";
import cn from "classnames";
import Card from "@components/management/products/card";
import ProductsRepository from "@repositories/products/products.repository";
import styles from "@styles/Management.module.scss";

const Products = async () => {
  const data = await getData(ProductsRepository);

  return (
    <Fragment>
      {data && data.map(product => {
        return (<Card id={product.id}
                      name={product.model}
                      displayName={product.brand && product.brand.displayName} />)
      })}
    </Fragment>
  )
}

async function getData(repository: typeof ProductsRepository) {
  const res = await repository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  return res?.data;
}

export default Products
