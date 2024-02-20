import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { v4 as uuid } from "uuid";
import { ITask } from "../../ts/interfaces/ITask";
import { Button } from "../Button";
import styles from "./Form.module.scss";

interface FormProps {
  onSubmit: Dispatch<SetStateAction<ITask[]>>;
}

const Form = ({ onSubmit }: FormProps) => {
  const [task, setTask] = useState("");
  const [taskTime, setTaskTime] = useState("00:00:00");

  const clearStringStates = (
    ...statesHandlers: Dispatch<SetStateAction<string>>[]
  ) => statesHandlers.forEach((handler) => handler(""));

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: ITask = {
      id: uuid(),
      task,
      time: taskTime,
      current: false,
      completed: false,
    };
    onSubmit((prevTasks) => [...prevTasks, newTask]);
    clearStringStates(setTask, setTaskTime);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo:</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.currentTarget.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.currentTarget.value)}
          id="time"
          min="00:00:01"
          max="01:30:00"
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export { Form };
