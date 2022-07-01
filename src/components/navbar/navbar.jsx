import { useState } from "react";
import { logo } from "../../assets/svg/logo";
import { search } from "../../assets/svg/search";
import avi from "../../assets/images/avi.png";
import "./navbar.scss";
import { arrowDown } from "../../assets/svg/arrowDown";
import MenuMobile from "../menuMobile/menuMobile";
import { bell } from "../../assets/svg/bell2";

export default function Navbar() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <>
      <nav className="navbar-main">
        <div>
          <svg
            className="menuIconMobile"
            fill="none"
            stroke="#213F7D"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpenMenuMobile(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
          <span className="logo">{logo}</span>
        </div>

        <div id="navbar-search">
          <div>
            <input type="text" placeholder="Search for anything" />
          </div>
          <button className="navbar-btn">{search}</button>
        </div>

        <div>
          <svg
            className="search-icon"
            fill="none"
            stroke="#213F7D"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="nav-docs">Docs</span>
          <span className="nav-bell">{bell}</span>
          <img src={avi} alt="avatar" className="avatar" />
          <p className="nav-name">Adedeji</p>
          <span className="nav-arrowDown">{arrowDown}</span>
        </div>
      </nav>

      {openMenuMobile && <MenuMobile setOpenMenuMobile={setOpenMenuMobile} />}
    </>
  );
}
