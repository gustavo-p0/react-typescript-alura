import { useState } from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { StopWatch } from "../../components/StopWatch";
import { ITask } from "../../ts/interfaces/ITask";
import styles from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);

  const toggleCurrent = (toggledTask: ITask) => {
    setCurrentTask(toggledTask);
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        task.current = false;
        return task.id === toggledTask.id ? toggledTask : task;
      });
    });
  };

  return (
    <div className={styles["AppStyle"]}>
      <Form onSubmit={setTasks} />
      <List tasks={tasks} handleToggleCurrent={toggleCurrent} />
      <StopWatch task={currentTask} />
    </div>
  );
}

export { App };
