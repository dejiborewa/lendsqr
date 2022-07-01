import { useState } from "react";
import "./menuMobile.scss";
import { switchOrg } from "../../assets/svg/briefcase";
import { home } from "../../assets/svg/home";
import { logo } from "../../assets/svg/logo";
import { sidebar } from "../../data/sidebar";

export default function MenuMobile({ setOpenMenuMobile }) {
  const [activeTab, setActiveTab] = useState({
    section: "customers",
    index: 0,
  });

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
      <ul className="sidebar-top">
        <li
          className={`list-nav ${
            activeTab.section === "sidebarTop" &&
            activeTab.index === 1 &&
            `activeNavLink`
          }`}
          onClick={() =>
            setActiveTab({
              section: "sidebarTop",
              index: 1,
            })
          }
        >
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
        <li
          className={`list-nav ${
            activeTab.section === "sidebarTop" &&
            activeTab.index === 2 &&
            `activeNavLink`
          }`}
          onClick={() =>
            setActiveTab({
              section: "sidebarTop",
              index: 2,
            })
          }
        >
          <span>{home}</span>Dashboard
        </li>
      </ul>
      <p className="list-heading">CUSTOMERS</p>
      <ul>
        {sidebar.customer.map((data, index) => (
          <li
            className={`list-nav ${
              activeTab.section === "customers" &&
              activeTab.index === index &&
              `activeNavLink`
            }`}
            onClick={() =>
              setActiveTab({
                section: "customers",
                index: index,
              })
            }
          >
            <span> {data.icon}</span>
            {data.text}
          </li>
        ))}
      </ul>
      <p className="list-heading">BUSINESS</p>
      <ul>
        {sidebar.businesses.map((data, index) => (
          <li
            className={`list-nav ${
              activeTab.section === "business" &&
              activeTab.index === index &&
              `activeNavLink`
            }`}
            onClick={() =>
              setActiveTab({
                section: "business",
                index: index,
              })
            }
          >
            <span> {data.icon}</span>
            {data.text}
          </li>
        ))}
      </ul>
      <p className="list-heading">SETTINGS</p>
      <ul>
        {sidebar.settings.map((data, index) => (
          <li
            className={`list-nav ${
              activeTab.section === "settings" &&
              activeTab.index === index &&
              `activeNavLink`
            }`}
            onClick={() =>
              setActiveTab({
                section: "settings",
                index: index,
              })
            }
          >
            <span> {data.icon}</span>
            {data.text}
          </li>
        ))}
      </ul>
    </aside>
  );
}
