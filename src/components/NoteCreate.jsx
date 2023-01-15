import React, { useState } from 'react'

const NoteCreate = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [category, setCategory] = useState("");
  
    const handleSubmit = () => {
      const payload = {
        title,
        note,
        category
      };
      console.log(payload);
      fetch("https://cute-pink-bee-hose.cyclic.app/notes/create", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
          "Authorization":localStorage.getItem("token")
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
  
    return (
      <div>
        <h3>Note Create Page</h3>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
}

export default NoteCreate
