import React from "react";
import { Button, Card, ListGroupItem, ListGroup, Row } from "react-bootstrap";
import UpdateContact from "./UpdateContact";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      hideCard: false,
    };
  }
  //hide update form
  hideUpdateContactForm = () => {
    this.setState({
      showUpdateForm: false,
      hideCard: false,
    });
  };
  handleContactEdit = () => {
    this.setState({
      showUpdateForm: true,
      hideCard: true,
    });
  };
  handleDeleteContact = (userId) => {
    let url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        this.props.deleteContact(userId);
      }
    });
  };

  render() {
    const { user, editContact } = this.props;
    const { id, name, email, phone, address } = user;
    const { showUpdateForm, hideCard } = this.state;
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 5,
        }}
      />
    );
    return (
      <div>
        <Row>
          {" "}
          {showUpdateForm ? (
            <UpdateContact
              updateContact={editContact}
              user={user}
              hideForm={this.hideUpdateContactForm}
            />
          ) : null}
        </Row>
        {!hideCard && (
          <Row>
            <Card style={{ width: "22rem" }} className="mt-3 contact-container">
              <Card.Body>
                <img
                  src="https://cdn-icons.flaticon.com/png/128/3033/premium/3033143.png?token=exp=1646718971~hmac=f2494821aea8677feb1e860effa3889b"
                  alt="contact-img"
                />
                <Card.Title className="card-title">{name}</Card.Title>
              </Card.Body>
              <ColoredLine color="grey" />

              <ListGroup className="list-group-flush">
                <ListGroupItem>Id :{id}</ListGroupItem>
                <ListGroupItem>Name: {name}</ListGroupItem>
                <ListGroupItem>Email :{email}</ListGroupItem>
                <ListGroupItem>Phone:{phone}</ListGroupItem>
                <ListGroupItem>Address :{address.city}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button
                  className="edit-btn"
                  variant="success"
                  onClick={this.handleContactEdit}
                >
                  Edit
                </Button>{" "}
                <Button
                  className="delete-btn"
                  variant="danger"
                  // onClick={() => deleteContact(user)}
                  onClick={() => this.handleDeleteContact(id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Row>
        )}
      </div>
    );
  }
}
export default Contact;
