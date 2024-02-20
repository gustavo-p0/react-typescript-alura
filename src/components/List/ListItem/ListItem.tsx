import { ITask } from "../../../ts/interfaces/ITask";
import styles from "./ListItem.module.scss";

interface ListItemProps {
  onClick: (task: ITask) => void;
  task: ITask;
}

const ListItem = ({ onClick, task }: ListItemProps) => {
  const { task: taskName, time, current, completed } = task;
  const handleClick = () => {
    onClick({ ...task, current: !current });
  };

  return (
    <li
      onClick={handleClick}
      className={`${styles["item"]} ${current ? styles.itemSelecionado : ""} ${
        completed ? styles.itemCompletado : ""
      }`}
    >
      <h3>{taskName}</h3>
      <span>{time}</span>
      {completed && (
        <span
          className={styles.concluido}
          aria-label="Tarefa completada"
        ></span>
      )}
    </li>
  );
};

export { ListItem };
