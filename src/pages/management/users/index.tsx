import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import UsersRepository from "@repositories/users/users.repository";
import {UserInterface} from "@shared/interfaces/user.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: UserInterface[]
}

const Users = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(user =>
        <Card
          id={user.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await UsersRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Users


