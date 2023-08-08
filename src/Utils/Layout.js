import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../Feature/modalToggle.slice";
import ModalConfirm from "modal_shiffff";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
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
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
