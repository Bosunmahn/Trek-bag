import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("");

  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        //basic validation 
        if (!itemText) {
          alert("Item can't be empty");
          inputRef.current.focus();
          return;
        }

        const newItem = {
          id: new Date().getTime(),
          name: itemText,
          packed: false,
        };

        setItems((prev) => [...prev, newItem]);
      }}
    >
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
      />
      <Button content="Add to list" />
    </form>
  );
};
export default AddItemForm;
