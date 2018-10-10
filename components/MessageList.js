import React from "react";
import Message from "./Message";

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
            <Message key={index} username={message.senderId} text={message.text} />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
