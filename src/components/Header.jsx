import moneyBag from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img
        src={moneyBag}
        alt="Green money bag with a golden dollar sign and coins in front and behind the bag"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
