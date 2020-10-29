import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";

import Settings from "./SettingComponent";
import CreateImport from "./CreateImportComponent";
import { setPenSize, setPenColor } from "../actions/noteActions";

function Header(props) {
  const [setting, toggleSettings] = useState(false);
  const [createImport, toggleCreateImport] = useState(false);

  const styles = {
    navigationLinks: {
      outline: "none",
      marginLeft: 10, 
      marginRight: 10
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Notes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => props.setPenColor({r:0,g:13,b:74,a:1.0})} style={styles.navigationLinks}>Eraser</Nav.Link>
          <select
            defaultValue={props.note.size}
            className="nav-link bg-dark"
            style={{ border: 0, outline: "none" }}
            onChange={e => props.setPenSize(e.target.value)}
          >
            {[5, 7, 10, 13, 15, 17, 20, 22, 25, 27, 30].map((e, i) => (
              <option defaultValue={props.note.size === e} key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
          <Nav.Link onClick={() => props.setPenColor(props.note.color1)} style={{...styles.navigationLinks, backgroundColor:`rgba(${props.note.color1.r}, ${props.note.color1.g}, ${props.note.color1.b}, ${props.note.color1.a})` }}>Color 1</Nav.Link>
          <Nav.Link onClick={() => props.setPenColor(props.note.color2)} style={{...styles.navigationLinks, backgroundColor:`rgba(${props.note.color2.r}, ${props.note.color2.g}, ${props.note.color2.b}, ${props.note.color2.a})` }}>Color 2</Nav.Link>
          <Nav.Link onClick={() => props.setPenColor(props.note.color3)} style={{...styles.navigationLinks, backgroundColor:`rgba(${props.note.color3.r}, ${props.note.color3.g}, ${props.note.color3.b}, ${props.note.color3.a})` }}>Color 3</Nav.Link>
          <Nav.Link onClick={() => props.setPenColor(props.note.color4)} style={{...styles.navigationLinks, backgroundColor:`rgba(${props.note.color4.r}, ${props.note.color4.g}, ${props.note.color4.b}, ${props.note.color4.a})` }}>Color 4</Nav.Link>
          <Nav.Link style={{fontSize:18}}>{props.note.name}</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{
            ...styles.navigationLinks,
            border: "1px solid",
            borderRadius: 10,
            paddingLeft:15,
            paddingRight:15
          }}>
            Save
          </Nav.Link>
          <Nav.Link onClick={() => toggleCreateImport(true)}>
            <i className="fas fa-plus"></i>
            {" "}Create Note
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            onClick={() => toggleSettings(true)}
          >
            <i className="fas fa-cog"></i> 
            {" "}Settings
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

const mapStateToProps = state => ({
  note: state.note
});

export default connect(mapStateToProps, {
  setPenColor,
  setPenSize
})(Header);
