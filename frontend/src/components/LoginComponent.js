import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "../styles/login.css";
import { loginUser } from "../actions/userActions";

const Login = props => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Login to Notes";
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (username !== "" || password !== "") {
      props.loginUser({
        username,
        password
      });
    } else {
      setError("Please provide the mandatory information to continue");
    }
  };

  return (
    <div className="center-it" style={{ top: 75 }}>
      <Card style={{ width: 400 }}>
        <Card.Header>
          <Card.Title>Notes</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Handwritten Notes
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            A whiteboard or a sketchpad to take handwritten notes, and to share
            it in public and among your friends.
          </Card.Text>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-sm-12 mb-2">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={username}
                  autoComplete="off"
                  id="username"
                  className="form-control"
                  onChange={e => {
                    setUsername(e.target.value);
                    setUsernameError("");
                  }}
                  onBlur={e =>
                    e.target.value === "" &&
                    setUsernameError("Please enter the username")
                  }
                />
                {usernameError && (
                  <small className="text-danger">{usernameError}</small>
                )}
              </div>
              <div className="form-group col-sm-12 my-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  autoComplete="off"
                  id="password"
                  className="form-control"
                  onChange={e => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  onBlur={e =>
                    e.target.value === "" &&
                    setPasswordError("Please enter the password")
                  }
                />
                {passwordError && (
                  <small className="text-danger">{passwordError}</small>
                )}
              </div>
              <div className="form-group col-sm-12 mt-2">
                <div className="mb-2 text-center">
                  <p>
                    Don't have the account <Link to="/signup">Create One?</Link>
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </div>
              {error && (
                <div className="form-group col-sm-12 mt-2">
                  <p className="text-danger">
                    <strong>{error}</strong>
                  </p>
                </div>
              )}
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    isAuth: state.user.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProp, { loginUser })(Login));
