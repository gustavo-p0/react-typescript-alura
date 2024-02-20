import { ITask } from "../../../ts/interfaces/ITask";
import styles from "./ListItem.module.scss";

interface ListItemProps {
  onClick: (task: ITask) => void;
  task: ITask;
}

const ListItem = ({ onClick, task }: ListItemProps) => {
  const { task: taskName, time, current } = task;
  const handleClick = () => {
    onClick({ ...task, current: !current });
  };

  return (
    <li
      onClick={handleClick}
      className={`${styles["item"]} ${current ? styles.itemSelecionado : ""}`}
    >
      <h3>{taskName}</h3>
      <span>{time}</span>
    </li>
  );
};

export { ListItem };
