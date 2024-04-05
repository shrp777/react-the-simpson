import { createContext, useContext } from "react";

const SimpsonContext = createContext(null);

export default function CommunicationParContexte() {
  return (
    <div>
      <SimpsonContext.Provider value="en">
        <h1>Communication par contexte</h1>
        <Homer />
        <Bart />
      </SimpsonContext.Provider>
    </div>
  );
}

function Homer() {
  const language = useContext(SimpsonContext);

  return (
    <div>
      <h2>Homer</h2>
      <img src="/Homer.png" />
      {language === "fr" ? (
        <p>Bonjour je m'appelle Homer.</p>
      ) : (
        <p>Hello, my name is Homer.</p>
      )}
    </div>
  );
}

function Bart() {
  const language = useContext(SimpsonContext);

  return (
    <div>
      <h2>Bart</h2>
      <img src="/Bart.png" />
      {language === "fr" ? (
        <p>Bonjour je m'appelle Bart.</p>
      ) : (
        <p>Hello, my name is Bart.</p>
      )}
    </div>
  );
}
