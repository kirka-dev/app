import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import SectionsRepository from "@repositories/sections/sections.repository";
import {SectionInterface} from "@shared/interfaces/section.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: SectionInterface[]
}

const Sections = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(section =>
        <Card
          id={section.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await SectionsRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Sections


