import { Button } from "../Button";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form action="" className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo:</label>
        <input
          type="text"
          name="task"
          id="task"
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
          id="time"
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
};

export { Form };
