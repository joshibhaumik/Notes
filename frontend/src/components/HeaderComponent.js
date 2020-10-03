import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

import Settings from "./SettingComponent";
import CreateImport from "./CreateImportComponent";

function Header() {
  const [sizes, selectSizes] = useState([5, 7, 10, 13, 15, 17, 20, 22, 25, 27, 30]);
  const [setting, toggleSettings] = useState(false);
  const [createImport, toggleCreateImport] = useState(false);

  const selectedSize = (e)=> {
    // set the redux for size
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Notes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{outline:'none'}}>Eraser</Nav.Link>
          <select
            defaultValue={10}
            className="nav-link bg-dark"
            style={{ border: 0, outline: "none" }}
            onChange={selectedSize}
          >
            {sizes.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
          <Nav.Link style={{ outline: "none" }}>Color 1</Nav.Link>
          <Nav.Link style={{ outline: "none" }}>Color 2</Nav.Link>
          <Nav.Link style={{ outline: "none" }}>Color 3</Nav.Link>
          <Nav.Link style={{ outline: "none" }}>Color 4</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => toggleCreateImport(true)}>
            Create Note
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            onClick={() => toggleSettings(true)}
          >
            <i className="fas fa-cog"></i>
            Settings
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CreateImport
        show={createImport}
        modify={() => toggleCreateImport(false)}
      />
      <Settings show={setting} modify={() => toggleSettings(false)} />
    </Navbar>
  );
}

export default Header;
