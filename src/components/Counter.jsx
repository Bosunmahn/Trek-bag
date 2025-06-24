const Counter = ({ totalNumberOfItems, totalNumberOfPacked }) => {
  return (
    <p>
      <b>{totalNumberOfPacked} </b>/ {totalNumberOfItems} items packed
    </p>
  );
};
export default Counter