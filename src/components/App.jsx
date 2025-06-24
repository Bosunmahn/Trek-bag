import { useState } from "react";
import { initialItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (id) => {
    const newItem = items.filter((item) => item.id !== id);
    setItems(newItem);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItems(newItems);
  };

  const handleRemoveItem = () => {
    setItems([]);
  };

  const handleResetItems = () => {
    setItems(initialItems);
  };

  const handleCompleteAllItems = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleinCompleteAllItems = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const totalNumberOfItems = items.length

  const totalNumberOfPacked = items.filter((item) => (item.packed)).length

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          totalNumberOfPacked={totalNumberOfPacked}
          totalNumberOfItems={totalNumberOfItems}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
          handleResetItems={handleResetItems}
          handleCompleteAllItems={handleCompleteAllItems}
          handleinCompleteAllItems={handleinCompleteAllItems}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
