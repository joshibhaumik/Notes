import React from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const styles = {
    icons: {
      fontSize: 20,
      cursor: "pointer"
    }
  };

  const editNote = () => {};

  const deleteNote = () => {
    if (window.confirm("Are you sure you want to delete this Note?")) {
      // proceed
    }
  };

  return (
    <div className="center-it" style={{ width: 750, marginTop: 100 }}>
      <div className="row">
        <div className="">
          <Image
            src={"https://picsum.photos/500"}
            width={300}
            height={300}
            roundedCircle
            alt="profile"
          />
        </div>
        <div style={{ width: 400, marginLeft: 50, marginTop: 65 }}>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{"First Name"}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{"Last Name"}</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>{"Username"}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{"Email"}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <Button variant="primary">Change Password?</Button>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ marginTop: 50 }} className="text-muted">
          Notes
        </h2>
        <table className="table">
          <tbody>
            <tr className="row">
              <td className="col-sm-10">
                <Link>{"Name"}</Link>
              </td>
              <td>
                <i
                  style={styles.icons}
                  className="fas fa-pen mr-3"
                  title="Edit Note"
                  onClick={editNote}
                ></i>
              </td>
              <td>
                <i
                  style={styles.icons}
                  className="fas fa-trash-alt text-danger"
                  title="Delete Note"
                  onClick={deleteNote}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
