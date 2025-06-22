
import Button from "./Button";

const ButtonGroup = ({
  handleRemoveItem,
  handleResetItems,
  handleCompleteAllItems,
  handleinCompleteAllItems,
}) => {
  return (
    <section className="button-group">
      <Button
        onClick={handleCompleteAllItems}
        type="secondary"
        content="Mark all as complete"
      />
      <Button
        onClick={handleinCompleteAllItems}
        type="secondary"
        content="Mark all as incomplete"
      />
      <Button
        onClick={handleResetItems}
        type="secondary"
        content="Reset to initial"
      />
      <Button
        onClick={handleRemoveItem}
        type="secondary"
        content="Remove all items"
      />
    </section>
  );
};
export default ButtonGroup;
