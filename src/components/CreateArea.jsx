import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [inputClick, setInputClick] = useState(false);

  function handleInputClick() {
    setInputClick(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {inputClick && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          onClick={handleInputClick}
          rows={inputClick ? 3 : 1}
        />
        <Zoom in={inputClick}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
