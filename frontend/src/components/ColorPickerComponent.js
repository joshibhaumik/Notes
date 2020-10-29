import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";

import { colorChange } from "../actions/noteActions";
import "../styles/colorPicker.css";

function ColorPicker(props) {
  const [show, toggleShow] = useState(false);
  return (
    <>
      <div
        className="swatch"
        onClick={() => toggleShow(!show)}
      >
        <div
          className="color"
          style={{
            backgroundColor: `rgba(${props.colors.r}, ${props.colors.g}, ${props.colors.b}, ${props.colors.a})`
          }}
        />
      </div>
      {show && (
        <div className="popover">
          <div
            className="cover"
            onClick={() => toggleShow(false)}
          />
          <SketchPicker
            color={props.colors}
            onChange={color => props.colorChange(color.rgb, props.num)}
          />
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  note: state.note
});

export default connect(mapStateToProps, {
  colorChange
})(ColorPicker);
