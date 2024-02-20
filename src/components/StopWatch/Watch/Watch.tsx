import styles from "./Watch.module.scss";

interface WatchProps {
  time: number | undefined;
}

const Watch = ({ time = 0 }: WatchProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={styles.relogioNumero}>{minutesTen}</span>
      <span className={styles.relogioNumero}>{minutesUnit}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secondsTen}</span>
      <span className={styles.relogioNumero}>{secondsUnit}</span>
    </>
  );
};

export { Watch };
