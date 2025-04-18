import { createRoot } from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./main.css";

function Header() {
  return (
    <div className="nav1">
      <div
        className="profile"
        onClick={() => {
          location.href = "";
        }}
      >
        <FontAwesomeIcon icon={faUser} color="var(--light-violet)" />
        <p>Profile</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faLocationDot} color="var(--light-violet)" />
        <select className="cities_dropdown">
          <option value="Chennai">Chennai</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
          <option value="Kolkata">Kolkata</option>
        </select>
        <a href="sign_in" className="btn1">
          Sign In
        </a>
        <a href="sign_up" className="btn1">
          Register
        </a>
        <FontAwesomeIcon
          icon={faBars}
          color="var(--light-violet)"
          onClick={() => {
            location.href = "";
          }}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        />
      </div>
    </div>
  );
}

const today = new Date().toISOString().split("T")[0];

function Nav() {
  return (
    <div className="nav2">
      <div className="tbar">
        <div className="nav2-1">
          <a href="index" style={{ color: "inherit", textDecoration: "none" }}>
            <img
              src="./src/assets/ShowPass.png"
              style={{ width: "130px" }}
              alt="Logo"
            />
          </a>
        </div>
        <div className="nav2-2">
          <a href="movies_now" className="nav2-link">
            Movies
          </a>
          <a href="sport" className="nav2-link">
            Sports
          </a>
          <a href="" className="nav2-link">
            Activites
          </a>
          <a href="" className="nav2-link">
            Events
          </a>
        </div>
      </div>
      <div className="sbar">
        <select className="s-dropdown">
          <option value="option1">Morning Show</option>
          <option value="option2">Afternoon Show</option>
          <option value="option3">Evening Show</option>
          <option value="option3">Night Show</option>
          <option value="option3">Midnight Show</option>
        </select>
        <input type="date" className="date" min={today} />
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          placeholder="Search for Movies, Concerts, Sports, and more..."
        />
        <button
          type="submit"
          className="btn2"
          onClick={() => {
            location.href = "";
          }}
          style={{ cursor: "pointer" }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-col">
          <img src="./src/assets/ShowPass.png" alt="Logo" className="logo" />
          <p>
            Subscribe to Showpass updates and never miss out on the latest
            events! Get exclusive deals, early access to tickets, and exciting
            entertainment news delivered straight to your inbox.
          </p>
        </div>
        <div className="footer-col">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>ITPL Road</p>
          <p>Whitefield, Banglore</p>
          <p>Karnataka, PIN 560066, India</p>
          <p className="email-id">customercare@showpass.com</p>
          <h4>+91 - 85562XXXXX</h4>
        </div>
        <div className="footer-col">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="index">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
                stroke="#797979"
                stroke-width="2"
              ></path>
              <path
                d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
                stroke="#797979"
                stroke-width="2"
              ></path>
            </svg>
            <input type="email" placeholder="Enter your Email ID" />
            <svg viewBox="0 0 32 32" width="40px" height="40px">
              <line
                fill="none"
                stroke="#797979"
                stroke-width="2"
                x1="26"
                y1="16"
                x2="4"
                y2="16"
              ></line>
              <polyline
                fill="none"
                stroke="#797979"
                stroke-width="2"
                points="18,7.5 26.5,16 18,24.5"
              ></polyline>
            </svg>
          </form>
          <div className="social-icons">
            <svg viewBox="-4.8 -4.8 41.60 41.60">
              <rect x="-4.8" y="-4.8" rx="20.8"></rect>
              <path d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11"></path>
            </svg>
            <svg viewBox="-1.6 -1.6 35.20 35.20">
              <rect x="-1.6" y="-1.6" rx="17.6"></rect>
              <path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"></path>
            </svg>
            <svg viewBox="-2.4 -2.4 28.80 28.80">
              <rect x="-2.4" y="-2.4" rx="14.4"></rect>
              <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"></path>
            </svg>
            <svg viewBox="-23.27 -23.27 139.60 139.60">
              <rect x="-23.27" y="-23.27" rx="69.8"></rect>
              <path d="M11.185,0.08C5.004,0.08,0.001,5.092,0,11.259c0,6.173,5.003,11.184,11.186,11.184c6.166,0,11.176-5.011,11.176-11.184 C22.362,5.091,17.351,0.08,11.185,0.08z"></path>
              <rect x="1.538" y="30.926" width="19.287" height="62.054"></rect>
              <path d="M69.925,29.383c-9.382,0-15.673,5.144-18.248,10.022h-0.258v-8.479H32.921H32.92v62.053h19.27V62.281 c0-8.093,1.541-15.932,11.575-15.932c9.89,0,10.022,9.256,10.022,16.451v30.178H93.06V58.942 C93.06,42.235,89.455,29.383,69.925,29.383z"></path>
            </svg>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Showpass © 2024 - All Rights Reserved.</p>
    </footer>
  );
}

createRoot(document.getElementById("header")).render(<Header />);

createRoot(document.getElementById("nav")).render(<Nav />);

createRoot(document.getElementById("footer")).render(<Footer />);
