import { Button } from "../Button";

const Form = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="task">Adicione um novo estudo:</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div>
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
      <Button />
    </form>
  );
};

export { Form };
