import React, { useEffect } from "react";

import Canvas from "./CanvasComponent";

function Note(props) {
  useEffect(() => {
    document.title = "Welcome to Notes Application";
  }, []);

  return !props.currentNote ? (
    <Canvas />
  ) : (
    <div
      style={{
        backgroundColor: "#ccc",
        width: "100%",
        height: "100vh"
      }}
    />
  );
}

export default Note;
