import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-1 flex-class">
          <h1>Subscribe to our Newsletter</h1>
          <div className="footer-form flex-class">
            <input type="text" placeholder="Your Email Address" />
            <button>Submit</button>
          </div>
        </div>
        <div className="footer-2 grid-class">
          <div className="grid-1">
            <h1>Contact Us</h1>
            <ul>
              <li>
                <b>Email</b>
                <p>needhelp@Organia.com</p>
              </li>
              <li>
                <b>Phone</b>
                <p>666 888 888</p>
              </li>
              <li>
                <b>Address</b>
                <p>88 road, borklyn street, USA</p>
              </li>
            </ul>
          </div>
          <div className="grid-2">
            <img
              src="./HomePageImages/Logo.svg"
              className="footer-img1"
              alt="Eror"
            />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
              <div className="flex">
                <img src="./HomePageImages/instagramm.svg" alt="Eror" />
                <img src="./HomePageImages/facebook.svg" alt="Eror" />
                <img src="./HomePageImages/twitter.svg" alt="Eror" />
                <img src="./HomePageImages/pinterest.svg" alt="Eror" />
              </div>
            </p>
          </div>
          <div className="grid-3">
            <h1>Utility Pages</h1>
            <ul>
              <li>
                <p>Style Guide</p>
              </li>
              <li>
                <p>404 Not Found</p>
              </li>
              <li>
                <p>Password Protected</p>
              </li>
              <li>
                <p>Licences</p>
              </li>
              <li>
                <p>Changelog</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-3">
          <p>
            Copyright © <b> Organick </b> | Designed by <b> VictorFlow </b>
            Templates - Powered by <b> Webflow</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
