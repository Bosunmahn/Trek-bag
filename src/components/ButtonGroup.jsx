import { secondaryButtons } from "../lib/constants";
import Button from "./Button";



const ButtonGroup = () => {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return <Button type="secondary" content={text} />;
      })}

      {/* <Button type="secondary" content="Mark all as complete" />
      <Button type="secondary" content="Mark all as incomplete" />
      <Button type="secondary" content="Reset to initial" />
      <Button type="secondary" content="Remove all items" /> */}
    </section>
  );
};
export default ButtonGroup;
