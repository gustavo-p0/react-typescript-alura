import { v4 as uuid } from "uuid";
import styles from "./List.module.scss";
import { ListItem } from "./ListItem/ListItem";
const List = () => {
  const tasks = [
    {
      id: uuid(),
      task: "React",
      time: "02:00:00",
    },
    { id: uuid(), task: "JavaScript", time: "01:00:00" },
    { id: uuid(), task: "TypeScript", time: "03:00:00" },
  ];
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(({ id, task, time }) => {
          return <ListItem key={id} task={task} time={time} />;
        })}
      </ul>
    </aside>
  );
};

export { List };
