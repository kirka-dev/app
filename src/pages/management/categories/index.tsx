import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import CategoriesRepository from "@repositories/categories/categories.repository";
import {CategoryInterface} from "@shared/interfaces/category.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: CategoryInterface[]
}

const Categories = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(category =>
        <Card
          id={category.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await CategoriesRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Categories


