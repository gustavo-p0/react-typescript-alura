import { useEffect, useState } from "react";
import { convertToSeconds } from "../../common/utils/time";
import { ITask } from "../../ts/interfaces/ITask";
import { Button } from "../Button";
import styles from "./StopWatch.module.scss";
import { Watch } from "./Watch";

interface StopWatchProps {
  task: ITask | null;
}

const StopWatch = ({ task }: StopWatchProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (task) setTime(convertToSeconds(task.time));
  }, [task]);

  console.log(time);
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
