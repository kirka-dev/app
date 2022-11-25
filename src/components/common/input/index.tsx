import cn from "classnames";
import styles from "./input.module.scss";
import {useState} from "react";

interface InputInterface {
  id: string,
  value?: string,
  type?: string,
  placeholder: string,
  required: boolean,
}

const Input = ({id, value, type, placeholder, required}: InputInterface) => {
  const [state, setState] = useState(value);

  return (
    <div className={cn(styles.Input)}>
      <input
        type={type || "text"}
        name={id}
        id={id}
        placeholder={placeholder}
        value={state}
        required={required}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}

export default Input
