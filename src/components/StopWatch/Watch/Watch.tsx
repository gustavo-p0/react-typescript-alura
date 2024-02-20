import styles from "./Watch.module.scss";

const Watch = () => {
  return (
    <>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>0</span>
      <span className={styles.relogioNumero}>0</span>
    </>
  );
};

export { Watch };
