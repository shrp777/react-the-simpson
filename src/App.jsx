import "./App.css";
import CommunicationParentEnfant from "./concepts/communication/01-parent-enfant/CommunicationParentEnfant";
import CommunicationParentEnfantAvecEtat from "./concepts/communication/02-parent-enfant-etat/CommunicationParentEnfantAvecEtat";
import CommunicationEnfantParent from "./concepts/communication/03-enfant-parent/CommunicationEnfantParent";
import CommunicationParContexte from "./concepts/communication/04-contexte/CommunicationParContexte";
import CommunicationParContexteEtEtat from "./concepts/communication/05-contexte-etat/CommunicationParContexteEtEtat";
function App() {
  return (
    <div className="App">
      <CommunicationParentEnfant />
      {/* <CommunicationParentEnfantAvecEtat /> */}
      {/* <CommunicationEnfantParent /> */}
      {/* <CommunicationParContexte /> */}
      {/* <CommunicationParContexteEtEtat /> */}
      <footer>
        <p>Concepts clés de React</p>
        <p>Alexandre Leroux (alex@shrp.dev) - 2024</p>
      </footer>
    </div>
  );
}

export default App;
