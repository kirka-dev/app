import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import MessengersRepository from "@repositories/messengers/messengers.repository";
import {MessengerInterface} from "@shared/interfaces/messenger.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: MessengerInterface[]
}

const Messengers = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(messenger =>
        <Card
          id={messenger.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await MessengersRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Messengers


