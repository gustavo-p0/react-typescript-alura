import styles from "./ListItem.module.scss";

interface ListItemProps {
  task: string;
  time: string;
}

const ListItem = ({ task, time }: ListItemProps) => {
  return (
    <li className={styles["item"]}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export { ListItem };
