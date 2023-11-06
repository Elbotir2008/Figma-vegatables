import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="flex-class">
          <div className="nav-logo flex-class">
            <img src="./HomePageImages/Logo.svg" alt="Eror" />
          </div>
          <div className="nav-links">
            <ul className="flex-class">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="nav-btns flex-class">
            <img src="./HomePageImages/Search Icon.svg" alt="Eror" />
            <img src="./HomePageImages/korzinka.svg" alt="Eror" />
            <h4>Cart (0)</h4>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
