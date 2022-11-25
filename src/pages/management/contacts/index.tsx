import cn from "classnames";
import Card from "@components/management/card";
import ManagementLayout from "@layouts/management";
import ContactsRepository from "@repositories/contacts/contacts.repository";
import {ContactInterface} from "@shared/interfaces/contact.interface";
import styles from "@styles/Management.module.scss";

interface Props {
  data: ContactInterface[]
}

const Contacts = ({data}: Props) => {
  return (
    <ManagementLayout>
      {data.map(contact =>
        <Card
          id={contact.id}
        />
      )}
    </ManagementLayout>
  )
}

export async function getServerSideProps() {
  const res = await ContactsRepository.findAll()
    .catch((reason) => {
      console.log(reason.code)
    });

  const data = res?.data;

  return { props: {data} }
}

export default Contacts


