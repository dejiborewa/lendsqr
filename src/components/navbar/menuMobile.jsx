import { switchOrg } from "../../assets/svg/briefcase";
import { home } from "../../assets/svg/home";
import { logo } from "../../assets/svg/logo";
import { sidebar } from "../../data/sidebar";

export default function MenuMobile({ setOpenMenuMobile }) {
  return (
    <aside className="menuMobile" id="menuMobile">
      <div>
        <span className="logo">{logo}</span>
        <svg
          style={{
            width: "2em",
            height: "2em",
            position: "relative",
            right: "0",
          }}
          fill="none"
          stroke="#213F7D"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpenMenuMobile(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <ul>
        <li className="switch">
          <span>{switchOrg}</span> Switch Organization
          <svg
            style={{ width: "1em", marginLeft: "5px" }}
            fill="none"
            stroke="#213F7D"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </li>
        <li className="list-nav">
          <span>{home}</span>Dashboard
        </li>
      </ul>
      <p className="customers">CUSTOMERS</p>
      <ul>
        {sidebar.customer.map((data, index) => (
          <li className="list-nav" key={index}>
            <span> {data.icon}</span>
            {data.text}
          </li>
        ))}
      </ul>
      <p className="customers">BUSINESS</p>
      <ul>
        {sidebar.businesses.map((data, index) => (
          <li className="list-nav" key={index}>
            <span> {data.icon}</span>
            {data.text}
          </li>
        ))}
      </ul>
    </aside>
  );
}
