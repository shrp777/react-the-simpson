function Homer() {
  function quandBartRepond(reponse) {
    alert("Bart dit : " + reponse);
  }

  return (
    <div>
      <h2>Homer</h2>
      <img src="/Homer.png" />
      <Bart message="range ta chambre !" repondre={quandBartRepond} />
    </div>
  );
}

function Bart({ message, repondre }) {
  return (
    <div>
      <h2>Bart</h2>
      <img src="/Bart.png" />
      <h3>Homer dit :</h3>
      <p>{message}</p>
      <button onClick={() => repondre("Même pas en rêve !")}>
        Répondre à Homer
      </button>
    </div>
  );
}

export default function CommunicationEnfantParent() {
  return (
    <div>
      <h1>Communication Enfant / Parent</h1>
      <Homer />
    </div>
  );
}
