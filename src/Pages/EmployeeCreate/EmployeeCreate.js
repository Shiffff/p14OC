import React from "react";
import "./employeeCreate.scss";
import Form from "../../Components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import ModalConfirm from "../../Components/ModalConfirm/ModalConfirm";
import { setShowModal } from "../../Feature/modalToggle.slice";

const EmployeeCreate = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ModalToggle.showModal);
  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    <div>
      {showModal && (
        <ModalConfirm text={"Employee Created!"} closeFct={closeModal} />
      )}
      <h2>Create Employee</h2>
      <Form />
    </div>
  );
};

export default EmployeeCreate;
