import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
export default class contacts extends Component {
  

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="Display-4 mb-2"> <span className="text-danger">Contact </span> List</h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  
                ></Contact>
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
