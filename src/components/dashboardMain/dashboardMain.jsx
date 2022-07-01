import { useState, useEffect } from "react";
import "./dashboardMain.scss";
import { totalUsers } from "../../data/totalUsers";
import { table } from "../../data/table";
import { tableBtn } from "../../assets/svg/table-button";
import { threeDots } from "../../assets/svg/threeDots";
import FilterUI from "../filterUI/filterUI";
import StatusMenu from "../statusMenu/statusMenu";

export default function DashboardMain() {
  const [filterUIIndex, setFilterUIIndex] = useState(null); // tracks the current filterUI that is open
  const [statusMenuIndex, setStatusMenuIndex] = useState(null); // tracks the current statusMenu that is open

  const openFilterUI = (e, element) => {
    if (filterUIIndex !== null) {
      // if any filterUI components is open, first close all
      const elements = Array.from(document.getElementsByClassName("filterUI"));
      elements.forEach((element) => {
        element.style.display = "none";
      });
    }

    if (e.currentTarget.id === element) {
      // open unique filterUI component based on the users click
      const index = element[element.length - 1]; // get the last character of the string; the unique index
      document.getElementById(`filterUI-${index}`).style.display = "block";
      setFilterUIIndex(index);
    }
  };

  const openStatusMenu = (e, element) => {
    if (statusMenuIndex !== null) {
      // if any statusMenu components is open, first close all
      const elements = Array.from(
        document.getElementsByClassName("statusMenu")
      );
      elements.forEach((element) => {
        element.style.display = "none";
      });

      if (e.currentTarget.id === element) {
        // open unique statusMenu component based on the users click
        const index = element[element.length - 1]; // get the last character of the string; the unique index
        document.getElementById(`statusMenu-${index}`).style.display = "block";
        setStatusMenuIndex(index);
      }
    }
  };

  useEffect(() => {
    const handleCloseFilterUI = (e) => {
      // watch for clicks outside the filterIcon and all the elements in the filterIcon; if the click happens outside the above, the filterUI component closes
      if (
        filterUIIndex !== null &&
        !document
          .getElementById(`filterIcon-${filterUIIndex}`)
          .contains(e.target)
      ) {
        document.getElementById(`filterUI-${filterUIIndex}`).style.display =
          "none";
      }
    };

    const handleCloseStatusMenu = (e) => {
      // watch for clicks outside the statusMenuIcon and all the elements in the statusMenuIcon; if the click happens outside the above, the statusMenu component closes
      if (
        statusMenuIndex !== null &&
        !document
          .getElementById(`statusMenuIcon-${statusMenuIndex}`)
          .contains(e.target)
      ) {
        document.getElementById(
          `statusMenuIcon-${statusMenuIndex}`
        ).style.display = "none";
      }
    };

    document.addEventListener("click", handleCloseFilterUI);
    document.addEventListener("click", handleCloseStatusMenu);

    return () => {
      document.removeEventListener("click", handleCloseFilterUI);
      document.removeEventListener("click", handleCloseStatusMenu);
    };
  });

  return (
    <div className="dashboard-main">
      <h3 className="dashboard-heading">Users</h3>
      <div className="user-data-container">
        {totalUsers.map((user, index) => (
          <div key={index} className="user-data">
            <div
              style={{
                background: user.background,
              }}
              className="icon-bg"
            >
              <span className="icon-dash">{user.icon}</span>
            </div>

            <p className="user-field">{user.field}</p>
            <span className="user-numbers">
              {user.numbers.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div>
        <table>
          <thead>
            <tr className="headerRow">
              {table.headers.map((item, index) => (
                <th
                  key={index}
                  className={`headerData ${
                    [
                      "ORGANIZATION",
                      "EMAIL",
                      "USERNAME",
                      "PHONE NUMBER",
                      "DATE JOINED",
                    ].includes(item) && `longCol`
                  }
                  `}
                >
                  <span>{item}</span>
                  {item !== "" && (
                    <span
                      style={{
                        marginLeft: "5px",
                        cursor: "pointer",
                        position: "relative",
                      }}
                      id={`filterIcon-${index}`}
                      onClick={(e) => openFilterUI(e, `filterIcon-${index}`)}
                    >
                      {tableBtn}
                      <FilterUI id={index} />
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.body.map((item, index) => (
              <tr key={index} className="bodyRow">
                <td className="longCol bodyData">{item.organization}</td>
                <td className="longCol bodyData">{item.username}</td>
                <td className="longCol bodyData">{item.email}</td>
                <td className="longCol bodyData">{item.phone}</td>
                <td className="longCol bodyData">{item.date}</td>
                <td className="bodyData status">
                  <span
                    className={
                      (item.status === "Inactive" && `inactive-status`) ||
                      (item.status === "Active" && `active-status`) ||
                      (item.status === "Pending" && `pending-status`) ||
                      (item.status === "Blacklisted" && `blacklisted-status`)
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td className="bodyData">
                  <span
                    style={{ cursor: "pointer", position: "relative" }}
                    id={`statusMenuIcon-${index}`}
                    onClick={(e) =>
                      openStatusMenu(e, `statusMenuIcon-${index}`)
                    }
                  >
                    {threeDots}
                    <StatusMenu id={index} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
