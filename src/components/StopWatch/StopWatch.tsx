import { Button } from "../Button";
import styles from "./StopWatch.module.scss";
import { Watch } from "./Watch";
const StopWatch = () => {
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Watch />
      </div>
      <Button>Começar!</Button>
    </div>
  );
};

export { StopWatch };
