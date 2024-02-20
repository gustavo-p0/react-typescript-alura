import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles["botao"]}>
      {children}
    </button>
  );
};

export { Button };
