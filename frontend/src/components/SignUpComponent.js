import React, { useEffect, useReducer } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signupUser } from "../actions/userActions";

const init = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  check: false,
  error: "",
  usernameError: "",
  passwordError: "",
  emailError: "",
  confirmPasswordError: ""
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case "WRITE":
      return {
        ...state,
        [action.key]: action.value
      };
    case "TOGGLE_CHECK":
      return {
        ...state,
        check: !state.check
      };
    default:
      return state;
  }
};

const SignUp = props => {
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    document.title = "SignUp to Notes";
  }, []);

  const handleSubmit = e => {
    const { check, username, password, email, confirmPassword } = state;
    e.preventDefault();
    if (!check) {
      dispatch({
        type: "WRITE",
        key: "error",
        value: "Please check the Terms & Conditions box to continue."
      });
    } else if (
      username === "" ||
      password === "" ||
      confirmPassword === "" ||
      email === ""
    ) {
      dispatch({
        type: "WRITE",
        key: "error",
        value: "You haven't answer all the information required."
      });
    } else {
      props.signupUser({
        username,
        email,
        password
      });
    }
  };

  const Capitalize = str => str.charAt().toUpperCase() + str.slice(1);

  const handleInput = e => {
    dispatch({ type: "WRITE", key: e.target.id, value: e.target.value });
    dispatch({ type: "WRITE", key: e.target.name, value: "" });
  };

  const validateInput = e =>
    e.target.value === "" &&
    dispatch({
      type: "WRITE",
      key: e.target.name,
      value: Capitalize(e.target.id) + " is required."
    });

  const validateEmail = e =>
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      e.target.value
    ) &&
    dispatch({
      type: "WRITE",
      key: e.target.name,
      value: "Please enter a valid Email."
    });

  const validatePassword = e => {
    let msg = "";
    // password validation
    dispatch({
      type: "WRITE",
      key: e.target.name,
      value: msg
    });
  };

  const validateConfirmPassword = e =>
    state.password !== e.target.value &&
    dispatch({
      type: "WRITE",
      key: e.target.name,
      value: "Confirm Password and Password dosen't match."
    });

  return (
    <div className="center-it" style={{ top: 75 }}>
      <Card style={{ width: 400 }}>
        <Card.Header>
          <Card.Title>Notes</Card.Title>
          <Card.Subtitle>Create Your Account</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-sm-12">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  value={state.username}
                  name="usernameError"
                  id="username"
                  onChange={handleInput}
                  onBlur={validateInput}
                />
                {state.usernameError && (
                  <small className="text-danger">{state.usernameError}</small>
                )}
              </div>
              <div className="form-group col-sm-12">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control"
                  value={state.email}
                  name="emailError"
                  id="email"
                  onChange={handleInput}
                  onBlur={e => {
                    validateInput(e);
                    validateEmail(e);
                  }}
                />
                {state.emailError && (
                  <small className="text-danger">{state.emailError}</small>
                )}
              </div>
              <div className="form-group col-sm-12">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={state.password}
                  name="passwordError"
                  id="password"
                  onChange={handleInput}
                  onBlur={validateInput}
                  onKeyUp={validatePassword}
                />
                {state.passwordError && (
                  <small className="text-danger">{state.passwordError}</small>
                )}
              </div>
              <div className="form-group col-sm-12">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={state.confirmPassword}
                  name="confirmPasswordError"
                  id="confirmPassword"
                  onChange={handleInput}
                  onBlur={e => {
                    validateInput(e);
                    validateConfirmPassword(e);
                  }}
                />
                {state.confirmPasswordError && (
                  <small className="text-danger">
                    {state.confirmPasswordError}
                  </small>
                )}
              </div>
              <div className="ml-3 mb-3 form-check col-sm-12">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="T&C"
                  checked={state.check}
                  onChange={() => dispatch({ type: "TOGGLE_CHECK" })}
                />
                <label className="form-check-label" htmlFor="T&C">
                  Terms & Conditions
                </label>
              </div>
              <div className="col-sm-12 form-group">
                <div style={{ textAlign: "center" }}>
                  <div>
                    <p>
                      Already have an account <Link to="/login">Login?</Link>
                    </p>
                  </div>
                  <div>
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="SignUp"
                    />
                  </div>
                </div>
              </div>
              <div>
                {state.error && (
                  <p className="ml-3 text-danger">
                    <strong>{state.error}</strong>
                  </p>
                )}
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps, { signupUser })(SignUp);
