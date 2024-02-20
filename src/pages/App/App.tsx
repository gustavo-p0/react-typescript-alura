import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { StopWatch } from "../../components/StopWatch";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["AppStyle"]}>
      <Form />
      <List />
      <StopWatch />
    </div>
  );
}

export { App };
