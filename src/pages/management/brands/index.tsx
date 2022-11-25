import cn from "classnames";
import {useRouter} from "next/router";
import Button from "@components/common/button";
import ManagementLayout from "@layouts/management";
import BrandsRepository from "@repositories/brands/brands.repository";
import {RoutesEnum} from "@shared/enums/routes.enum";
import {BrandInterface} from "@shared/interfaces/brand.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: BrandInterface[]
}

const Brands = ({data}: Props) => {
  const router = useRouter();
  const addPath = RoutesEnum.MANAGEMENT + RoutesEnum.BRANDS + RoutesEnum.ADD;

  return (
    <ManagementLayout>
      <div className={cn(styles.Management__header)}>
        <div className={cn(styles.Management__addButton)}>
          <Button title="Добавить" click={() => router.push(addPath)}/>
        </div>
      </div>
      <div className={cn(styles.Management__body)}>
        {data.map(brand =>
          <Card data={brand}/>
        )}
      </div>
    </ManagementLayout>
  )
}

const Card = ({data}: any) => {
  const router = useRouter();
  const editPath = RoutesEnum.MANAGEMENT + RoutesEnum.BRANDS;

  return (
    <div className={cn(styles.Management__card, styles.BrandCard)} onClick={() => router.push(editPath + `/${data.id}`)}>
      <div className={cn(styles.BrandCard__displayName)}>{data.displayName}</div>
      <div className={cn(styles.BrandCard__name)}>{data.name}</div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await BrandsRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Brands


