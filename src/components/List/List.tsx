import { ITask } from "../../ts/interfaces/ITask";
import styles from "./List.module.scss";
import { ListItem } from "./ListItem/ListItem";

interface ListProps {
  tasks: ITask[];
  handleToggleCurrent: (task: ITask) => void;
}

const List = ({ tasks, handleToggleCurrent }: ListProps) => {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => {
          const { id } = task;
          return (
            <ListItem onClick={handleToggleCurrent} key={id} task={task} />
          );
        })}
      </ul>
    </aside>
  );
};

export { List };
