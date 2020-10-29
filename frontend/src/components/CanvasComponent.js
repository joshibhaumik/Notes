import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

function Canvas(props) {
  const [pointerTouched, togglePointerTouched] = useState(false);
  const [points, togglePoints] = useState([]);
  const canvas = useRef(null);
  const [ctx, changeCtx] = useState(null);

  useEffect(() => {
    canvas.current.width = props.note.width;
    canvas.current.height = props.note.height;
    let ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "rgba(0,13,74,1.0)";
    ctx.fill();
    changeCtx(ctx);
    // if the points are provided to the canvas
    if (props.points) {
      for (let point of props.points) {
        ctx.beginPath();
        ctx.lineWidth = point.size || 5;
        ctx.lineCap = "round";
        ctx.lineTo(point.clientX, point.clientY);
        ctx.strokeStyle = point.color || "#fff";
        ctx.stroke();
        ctx.moveTo(point.clientX, point.clientY);
      }
    }
  }, []);

  const DrawOnCanvas = e => {
    ctx.beginPath();
    ctx.lineWidth = e.size || props.note.size;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = e.color || `rgba(${props.note.penColor.r}, ${props.note.penColor.g}, ${props.note.penColor.b}, ${props.note.penColor.a})`;
    ctx.stroke();
    ctx.moveTo(e.clientX, e.clientY);
  };

  return (
    <canvas
      ref={canvas}
      onMouseMove={pointerTouched ? DrawOnCanvas : () => {}}
      onMouseDown={e => {
        e.button === 0 && togglePointerTouched(true);
      }}
      onMouseUp={() => {
        togglePointerTouched(false);
      }}
    ></canvas>
  );
}

const mapStateToProps = state => ({
  note: state.note
});

export default connect(mapStateToProps)(Canvas);
