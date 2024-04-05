function Homer() {
  return (
    <div>
      <h2>Homer</h2>
      <img src="/Homer.png" />
      <Bart message="range ta chambre !" />
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

export default function CommunicationParentEnfant() {
  return (
    <div>
      <h1>Communication Parent / Enfant</h1>
      <Homer />
    </div>
  );
}
