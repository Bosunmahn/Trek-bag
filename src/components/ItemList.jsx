import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {

  const [sortBy, setSortBy] = useState("default")

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }

    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    return ;

  })

  const sortingOptions = [
    { label: "sort by default", value: "default" },
    { label: "sort by packed", value: "packed" },
    { label: "sort by unpacked", value: "unpacked" },
  ];

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting ">
          <Select onChange={(option)=> setSortBy(option.value)} defaultValue={sortingOptions[0]}   options =  {sortingOptions} />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};
export default ItemList;

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onClick={() => {
            onToggleItem(item.id);
          }}
        />
        {item.name}
      </label>

      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
