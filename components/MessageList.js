import React from "react";

const DUMMY_DATA = [
  {
    senderId: "Mohit",
    text: "I am doing fine"
  },
  {
    senderId: "Sneha",
    text: "What is going on?"
  }
];

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <div key= {index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
