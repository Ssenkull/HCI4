import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import FigureSection from "../Figure/FigureSection";
import SoundSection from "../SoundSection/SoundSection";

import classes from "./ModalContent.module.css";

const ModalContent = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.modal}>
        <FigureSection />
        <SoundSection />

        <Button onClick={props.onClose}>Exit</Button>
      </div>
    </Modal>
  );
};

export default ModalContent;
