import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import ColorsRepository from "@repositories/colors/colors.repository";
import {ColorInterface} from "@shared/interfaces/color.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: ColorInterface[]
}

const Colors = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(color =>
        <Card
          id={color.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await ColorsRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Colors


