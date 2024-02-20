import { useEffect, useState } from "react";
import { convertToSeconds } from "../../common/utils/time";
import { ITask } from "../../ts/interfaces/ITask";
import { Button } from "../Button";
import styles from "./StopWatch.module.scss";
import { Watch } from "./Watch";

interface StopWatchProps {
  task: ITask | null;
  onTimeOut: () => void;
}

const StopWatch = ({ task, onTimeOut }: StopWatchProps) => {
  const [time, setTime] = useState<number>();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let timerId: number | undefined;
    if (task?.current) {
      setTime(convertToSeconds(task?.time));
    }

    if (started) {
      timerId = setInterval(() => {
        if (time! > 0) {
          setTime((prevTime) => --prevTime!);
        } else {
          onTimeOut();
          clearInterval(timerId!);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [task, time, started]);
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button disabled={!time} onClick={() => setStarted(true)}>
        Começar!
      </Button>
    </div>
  );
};

export { StopWatch };
