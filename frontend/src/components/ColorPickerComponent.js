import React, { useState } from "react";
import { SketchPicker } from "react-color";

import "../styles/colorPicker.css";

function ColorPicker() {
  const [state, modify] = useState({
    color: {
      r: "0",
      g: "13",
      b: "74",
      a: "1.0"
    },
    renderIt: false
  });
  return (
    <>
      <div
        className="swatch"
        onClick={() => modify({ ...state, renderIt: !state.renderIt })}
      >
        <div
          className="color"
          style={{
            backgroundColor: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`
          }}
        />
      </div>
      {state.renderIt && (
        <div className="popover">
          <div
            className="cover"
            onClick={() => modify({ ...state, renderIt: false })}
          />
          <SketchPicker
            color={state.color}
            onChange={color => {
              modify({ ...state, color: color.rgb });
            }}
          />
        </div>
      )}
    </>
  );
}

export default ColorPicker;
