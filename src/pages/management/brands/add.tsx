import cn from "classnames";
import Button from "@components/common/button";
import Input from "@components/common/input";
import ManagementLayout from "@layouts/management";
import BrandsRepository from "@repositories/brands/brands.repository";
import styles from "@styles/Management.module.scss";

const Add = () => {
  function handleSubmit(e: any){
    e.preventDefault();

    const formData = new FormData(e.target);
    BrandsRepository.create(Object.fromEntries(formData.entries()))
      .then(() => {})
      .catch(() => {alert('Error')});
  }

  return (
    <ManagementLayout>
      <form className={cn(styles.Management__form)} onSubmit={(e) => handleSubmit(e)}>
        <Input id="name" placeholder="Системное название" required />
        <Input id="displayName" placeholder="Отображаемое название" required />
        <Input id="description" placeholder="Описание" required/>
        <Button type="submit" title="Добавить"/>
      </form>
    </ManagementLayout>
  )
}

export default Add


