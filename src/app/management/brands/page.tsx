import {Fragment} from "react";
import cn from "classnames";
import Card from "@components/management/brands/card";
import BrandsRepository from "@repositories/brands/brands.repository";
import styles from "@styles/Management.module.scss";

const Brands = async () => {
  const data = await getData(BrandsRepository);

  return (
    <Fragment>
      {data && data.map(brand => {
        return (<Card id={brand.id}
                      name={brand.name}
                      displayName={brand.displayName} />)
      })}
    </Fragment>
  )
}

async function getData(repository: typeof BrandsRepository) {
  const res = await repository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  return res?.data;
}

export default Brands


