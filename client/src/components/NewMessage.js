import React, { useState } from "react";

function NewMessage({ currentUser, onAddMessage }) {
  const [body, setBody] = useState("");

function handleSubmit(e) {
    e.preventDefault();

    if (!body.trim()) {
      alert("Message body cannot be empty.")
    } return;
  }
  
 fetch("http://127.0.0.1:5555/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: currentUser.username,
      body: body,
    }),
  })
    .then((r) => r.json())
    .then((newMessage) => {
      onAddMessage(newMessage);
      setBody("");
    });





  return (
    <form className="new-message" onSubmit={handleSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewMessage;
