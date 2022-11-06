import styles from "@styles/Management.module.scss";
import cn from "classnames";
import BrandsRepository from "@repositories/brands/brands.repository";
import Card from "@components/management/brands/card";

const Brands = async () => {
  const data = await getData();

  return (
    <section className={cn(styles.Brands)}>
      {data.map(brand => <Card data={brand}/>)}
    </section>
  )
}

async function getData() {
  const res = await BrandsRepository.findAll();

  return res.data;
}

export default Brands


