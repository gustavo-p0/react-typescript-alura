import { ReactNode } from "react";
import styles from "./Button.module.scss";
const Button = ({ children }: { children: ReactNode }) => {
  return <button className={styles["botao"]}>{children}</button>;
};

export { Button };
