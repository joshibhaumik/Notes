import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import "../styles/settings.css";
import ColorPicker from "./ColorPickerComponent";
import { connect } from "react-redux";
import { logoutUser } from "../actions/userActions";

const Setting = props => {

  const [setting, toggleSetting] = useState(true);

  const handleLogout = () => {
    if (window.confirm("Are You Sure You Want To Log Out of Notes?")) {
      props.modify();
      props.logoutUser();
    }
  }

  const SettingsTab = () => (
      <div>
        <div className="row">
          <div className="col-sm">
            Color 1 <ColorPicker num={1} colors={props.note.color1} />
          </div>
          <div className="offset-sm-2 col-sm">
            Color 2 <ColorPicker num={2} colors={props.note.color2} />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-sm">
            Color 3 <ColorPicker num={3} colors={props.note.color3} />
          </div>
          <div className="offset-sm-2 col-sm">
            Color 4 <ColorPicker num={4} colors={props.note.color4} />
          </div>
        </div>
      </div>
    );

  const SharingTab = () => <div></div>

  return (
    <Modal
      show={props.show}
      onHide={props.modify}
      animation={false}
    >
      <Modal.Header closeButton style={{ borderBottom: 0 }}>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0 }}>
        <nav>
          <button
            className="nav-buttons"
            onClick={() => toggleSetting(true)}
          >
            Setting
          </button>
          <button
            className="nav-buttons"
            onClick={() => toggleSetting(false)}
          >
            Share
          </button>
        </nav>
        <div style={{ padding: 16 }}>
          {setting ? SettingsTab() : SharingTab()}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-danger"
          onClick={handleLogout}
          style={{ position: "absolute", left: 12 }}
        >
          Log Out
        </button>
        <button className="btn btn-secondary" onClick={props.modify}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = state => ({
  note: state.note
});

export default connect(
  mapStateToProps,
  {
    logoutUser
  }
)(Setting);
