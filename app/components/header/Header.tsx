import { korzinka, logo, search } from "@/public/homeImages";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="flex-class">
          <div className="nav-logo flex-class">
            <img src={logo} alt="Eror" />
            <h1>Organick</h1>
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
            <img src={search} alt="Eror" />
            <img src={korzinka} alt="Eror" />
            <h4>Cart (0)</h4>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
