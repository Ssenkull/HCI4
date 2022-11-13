import { useState } from "react";
import "./App.css";
import ModalContent from "./components/Modal/Main/ModalContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const manageStatus = () => {
    setIsOpen((curState) => !curState);
  };
  return (
    <div className="wrapper">
      <button className="button-39" onClick={manageStatus}>
        Open Form
      </button>
      {isOpen && <ModalContent onClose={manageStatus}></ModalContent>}
    </div>
  );
}

export default App;
