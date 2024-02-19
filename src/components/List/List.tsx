import { v4 as uuid } from "uuid";
const List = () => {
  const tasks = [
    {
      id: uuid(),
      task: "React",
      time: "02:00:00",
    },
    { id: uuid(), task: "JavaScript", time: "01:00:00" },
    { id: uuid(), task: "TypeScript", time: "03:00:00" },
  ];
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(({ id, task, time }) => {
          return (
            <li key={id}>
              <h3>{task}</h3>
              <span>{time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export { List };
