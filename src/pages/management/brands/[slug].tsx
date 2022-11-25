import cn from "classnames";
import Button from "@components/common/button";
import Input from "@components/common/input";
import ManagementLayout from "@layouts/management";
import BrandsRepository from "@repositories/brands/brands.repository";
import styles from "@styles/Management.module.scss";
import {BrandInterface} from "../../../shared/interfaces/brand.interface";
import {useRouter} from "next/router";
import {RoutesEnum} from "../../../shared/enums/routes.enum";

interface Props {
  data: BrandInterface,
  params: any,
}

const Edit = ({data}: Props) => {
  const router = useRouter();

  function handleSubmit(e: any){
    e.preventDefault();

    const formData = new FormData(e.target);
    BrandsRepository.update({...Object.fromEntries(formData.entries()), id: data.id})
      .then(() => {
        router.push(RoutesEnum.MANAGEMENT + RoutesEnum.BRANDS)
      })
      .catch(() => {alert('Error')});
  }

  return (
    <ManagementLayout>
      <form className={cn(styles.Management__form)} onSubmit={(e) => handleSubmit(e)}>
        <Input id="name" placeholder="Системное название" value={data.name} required />
        <Input id="displayName" placeholder="Отображаемое название" value={data.displayName} required />
        <Input id="description" placeholder="Описание" value={data.description} required/>
        <Button type="submit" title="Сохранить"/>
      </form>
    </ManagementLayout>
  )
}

export async function getServerSideProps({ params }: any) {
  const res = await BrandsRepository.findOne(params.slug)
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Edit


