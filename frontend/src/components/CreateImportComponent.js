import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function CreateImport({ show, modify }) {
  const [state, setState] = useState({
    name: "",
    import: "",
    checked: false,
    nameError: "",
    importError: "",
    loadnote: "",
    loaded: false
  });

  const varifyImport = e => {
    e = e.target.value;
  };

  const varifyName = e => {
    if (e.target.readOnly) return;
    e = e.target.value;
    let error = "";
    if (e.length > 75)
      error = "Max length exceed, name should be of 75 characters only.";
    else if (e === "") error = "Enter the name of the Note.";
    else error = "";
    setState({ nameError: error });
  };

  const buttonName = () => {
    if (state.checked) return "Import Note";
    else if (state.loaded) return "Load Note";
    else return "Create Note";
  };

  return (
    <Modal show={show} onHide={modify} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Create Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="notename">Note Name</label>
          <input
            type="text"
            className="form-control"
            id="notename"
            aria-describedby="noteName"
            placeholder="Enter Note Name"
            maxLength={75}
            value={state.name}
            onChange={e => setState({ name: e.target.value })}
            readOnly={state.checked || state.loaded}
            onBlur={varifyName}
          />
          {state.nameError && (
            <small id="noteName" className="form-text text-danger">
              {state.nameError}
            </small>
          )}
        </div>
        <div className="form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="loaded"
            checked={state.loaded}
            onChange={() =>
              setState({
                loaded: !state.loaded,
                checked: state.checked ? false : false
              })
            }
          />
          <label className="form-check-label" htmlFor="loaded">
            Load a Note?
          </label>
        </div>
        <div className="form-group">
          <select
            className="form-control mt-2"
            value={state.loadnote}
            onChange={e => setState({ loadnote: e.target.value })}
            readOnly={state.checked || !state.loaded}
          >
            {/* iterate over his/her notes */}
          </select>
        </div>
        <div className="form-check mt-4">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
            checked={state.checked}
            onChange={() =>
              setState({
                checked: !state.checked,
                loaded: state.loaded ? false : false
              })
            }
          />
          <label className="form-check-label" htmlFor="checkbox">
            Import a Note?
          </label>
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            id="importnote"
            aria-describedby="importNote"
            placeholder="Import Note URL"
            value={state.import}
            onChange={e => setState({ import: e.target.value })}
            readOnly={!state.checked || state.loaded}
            onBlur={varifyImport}
          />
          {state.importError && (
            <small id="importNote" className="form-text text-muted">
              {state.importError}
            </small>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button style={{marginRight:'11rem'}} className='btn btn-success'>Import Pdf</button>
        <button className="btn btn-secondary" onClick={modify}>
          Close
        </button>
        <button className="btn btn-primary" onClick={modify}>
          {buttonName()}
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateImport;
