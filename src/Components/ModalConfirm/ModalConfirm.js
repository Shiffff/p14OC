import React from "react";
import "./modalConfirm.scss";

const ModalConfirm = ({ closeFct }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <p>Employee Created!</p>
        <p onClick={closeFct} className="close">
          X
        </p>
      </div>
    </div>
  );
};

export default ModalConfirm;
