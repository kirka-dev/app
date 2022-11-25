import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import RolesRepository from "@repositories/roles/roles.repository";
import {RoleInterface} from "@shared/interfaces/role.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: RoleInterface[]
}

const Roles = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(role =>
        <Card
          id={role.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await RolesRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Roles


