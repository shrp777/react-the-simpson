import { createContext, useContext, useState } from "react";

const SimpsonContext = createContext(null);

export default function CommunicationParContexte() {
  const [language, setLanguage] = useState("fr");

  const onLanguageChange = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <div>
      <SimpsonContext.Provider value={language}>
        <h1>Communication par contexte et état</h1>
        <Drapeau whenLanguageIsSelected={onLanguageChange} />
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

function Drapeau({ whenLanguageIsSelected }) {
  const language = useContext(SimpsonContext);

  return (
    <button className="flag" onClick={whenLanguageIsSelected}>
      {language === "fr" ? <img src="/fr.png" /> : <img src="/en.png" />}
    </button>
  );
}
