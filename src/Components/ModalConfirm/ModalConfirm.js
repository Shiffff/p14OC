import React from "react";
import "./modalConfirm.scss";

const ModalConfirm = ({ text, closeFct }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <p>{text}</p>
        <p onClick={closeFct} className="close">
          X
        </p>
      </div>
    </div>
  );
};

export default ModalConfirm;
