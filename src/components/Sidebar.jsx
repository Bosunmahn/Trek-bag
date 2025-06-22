import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handleAddItem,
  handleRemoveItem,
  handleResetItems,
  handleCompleteAllItems,
  handleinCompleteAllItems,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />

      <ButtonGroup
        handleRemoveItem={handleRemoveItem}
        handleResetItems={handleResetItems}
        handleCompleteAllItems={handleCompleteAllItems}
        handleinCompleteAllItems={handleinCompleteAllItems}
      />
    </div>
  );
};
export default Sidebar;
