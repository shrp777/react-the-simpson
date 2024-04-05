import "./App.css";
import CommunicationParentEnfant from "./concepts/communication/01/CommunicationParentEnfant";
import CommunicationParentEnfantAvecEtat from "./concepts/communication/02/CommunicationParentEnfantAvecEtat";
import CommunicationEnfantParent from "./concepts/communication/03/CommunicationEnfantParent";
import CommunicationParContexte from "./concepts/communication/04/CommunicationParContexte";
import CommunicationParContexteEtEtat from "./concepts/communication/05/CommunicationParContexteEtEtat";
function App() {
  return (
    <div className="App">
      <CommunicationParentEnfant />
      {/* <CommunicationParentEnfantAvecEtat /> */}
      {/* <CommunicationEnfantParent /> */}
      {/* <CommunicationParContexte /> */}
      {/* <CommunicationParContexteEtEtat /> */}
    </div>
  );
}

export default App;
