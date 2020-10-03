import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import "../styles/login.css";

function Login() {
  useEffect(() => {
    document.title = "Login to Notes";
  }, []);

  return (
    <div className="center-it" style={{ top: "25%" }}>
      <Card style={{ width: 500 }}>
        <Card.Body>
          <Card.Title>Notes</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Handwritten Notes
          </Card.Subtitle>
          <Card.Text>
            A whiteboard or a sketchpad to take handwritten notes, and to share
            it in public and among your friends.
          </Card.Text>
          <div className="text-center">
            <button className="btn btn-gplus">Login with Google+</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
