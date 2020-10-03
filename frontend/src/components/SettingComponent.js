import React from "react";
import { Modal } from "react-bootstrap";

import "../styles/settings.css";
import ColorPicker from './ColorPickerComponent';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: true,
      displayColorPicker: false,
      color: {
        r: "241",
        g: "112",
        b: "19",
        a: "1"
      }
    };
  }

  handleLogout() {
    if(window.confirm('Are You Sure You Want To Log Out of Notes?')) {
      // log them out
      this.props.modify();
    }
  }

  handleChange = color => {
    this.setState({ color: color.rgb });
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.modify}
        animation={false}
      >
        <Modal.Header closeButton style={{ borderBottom: 0 }}>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <nav>
            <button
              className="nav-buttons"
              onClick={() => this.setState({ setting: true })}
            >
              Setting
            </button>
            <button
              className="nav-buttons"
              onClick={() => this.setState({ setting: false })}
            >
              Share
            </button>
          </nav>
          <div style={{ padding: 16 }}>
            {this.state.setting ? this.SettingsTab() : this.SharingTab()}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger' onClick={this.handleLogout.bind(this)} style={{marginRight:180}}>Log Out</button>
          <button className="btn btn-secondary" onClick={this.props.modify}>
            Close
          </button>
          {this.state.setting && (
            <button className="btn btn-primary" onClick={this.props.modify}>
              Save Changes
            </button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }

  SettingsTab() {
    return (
        <div>
            <div className='row'>
                <div className='col-sm'>
                    Color 1 <ColorPicker />
                </div>
                <div className='offset-sm-2 col-sm'>
                    Color 2 <ColorPicker />
                </div>
            </div><br /><br />
            <div className='row'>
                <div className='col-sm'>
                    Color 3 <ColorPicker />
                </div>
                <div className='offset-sm-2 col-sm'>
                    Color 4 <ColorPicker />
                </div>
            </div>
        </div>
    );
  }

  SharingTab() {
    return <div></div>;
  }
}

export default Setting;
