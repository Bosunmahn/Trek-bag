import Counter from "./Counter"
import Logo from "./Logo"

const Header = ({ totalNumberOfItems, totalNumberOfPacked }) => {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfPacked={totalNumberOfPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
};
export default Header