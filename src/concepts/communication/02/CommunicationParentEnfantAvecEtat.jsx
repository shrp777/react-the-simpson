import { useState } from "react";

function Homer() {
  const [task, setTask] = useState(null);

  const allTasks = [
    "Range ta chambre !",
    "Fais tes devoirs !",
    "Sors le chien !",
    "Laisse ta soeur tranquille !"
  ];

  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * allTasks.length);
    const randomTask = allTasks[randomIndex];
    setTask(randomTask);
  }

  return (
    <div>
      <h2>Homer</h2>
      <img src="/Homer.png" />
      <Bart message={task} />
      <button onClick={getRandomTask}>Parler à Bart</button>
    </div>
  );
}

function Bart({ message }) {
  return (
    <div>
      <h2>Bart</h2>
      <img src="/Bart.png" />
      <h3>Homer dit :</h3>
      <p>{message}</p>
    </div>
  );
}

export default function CommunicationParentEnfantAvecEtat() {
  return (
    <div>
      <h1>Communication Parent / Enfant</h1>
      <Homer />
    </div>
  );
}
