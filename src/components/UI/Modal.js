import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const PortalElements = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, PortalElements)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElements
      )}
    </Fragment>
  );
};
