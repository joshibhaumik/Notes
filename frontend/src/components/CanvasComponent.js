import React, { useState, useRef, useEffect } from "react";

function Canvas(props) {
  const [pointerTouched, togglePointerTouched] = useState(false);
  const [points, togglePoints] = useState([]);
  const canvas = useRef(null);
  const [ctx, changeCtx] = useState(null);

  useEffect(() => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    let ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "rgba(0,13,74,1.0)";
    ctx.fill();
    changeCtx(ctx);
    // if the points are provided to the canvas
    if(props.points) {
      for(let point of props.points) {
        ctx.beginPath();
        ctx.lineWidth = point.size || 5;
        ctx.lineCap = "round";
        ctx.lineTo(point.clientX, point.clientY);
        ctx.strokeStyle = point.color || '#fff';
        ctx.stroke();
        ctx.moveTo(point.clientX, point.clientY);
      }
    }
  }, []);

  const DrawOnCanvas = e => {
    ctx.beginPath();
    ctx.lineWidth = e.size || 7;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = e.color || '#fff';
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

/*

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: null,
      pointerTouched: false,
      points: [],
      plotted:[]
    };
  }
  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight + 66;
    this.setState({ ctx: this.canvas.getContext("2d") });
  }
  DrawOnCanvas(e) {
    this.state.ctx.beginPath();
    this.state.ctx.arc(e.clientX, e.clientY - 56, 10, 0, 2 * Math.PI);
    this.state.ctx.fill();
    this.state.ctx.stroke();
    let obj = {
      size:10,
      x:e.clientX,
      y:e.clientY - 56,
      r:0,
      g:0,
      b:0,
      a:1
    }
    // let value = this.state.val;
    // value.push(`${e.clientX}:${e.clientY - 56}`);
    
  }
  render() {
    return (
      <canvas
        ref={e => (this.canvas = e)}
        onMouseMove={
          this.state.pointerTouched ? this.DrawOnCanvas.bind(this) : () => {}
        }
        onMouseDown={e => {
          e.button === 0 && this.setState({ pointerTouched: true });
        }}
        onMouseUp={() => {
          this.setState({ pointerTouched: false });
          // this.setState({points:[...this.state.points,...this.state.plotted]})
        }}
      ></canvas>
    );
  }
}

*/

export default Canvas;
