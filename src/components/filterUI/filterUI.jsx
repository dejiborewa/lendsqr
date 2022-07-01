import React from "react";
import "./filterUI.scss";
import { arrowDownEmpty } from "../../assets/svg/arrowDownEmpty";

const FilterUI = ({ id }) => {
  return (
    <div id={`filterUI-${id}`} className="filterUI">
      <div className="filterInput-container">
        <p>Organization</p>
        <input type="text" className="filter-input" />
      </div>

      <div className="filterInput-container">
        <p>Username</p>
        <input type="text" placeholder="User" className="filter-input" />
      </div>

      <div className="filterInput-container">
        <p>Email</p>
        <input type="email" placeholder="Email" className="filter-input" />
      </div>

      <div className="filterInput-container">
        <p>Date</p>
        <input type="date" className="filter-input" />
      </div>

      <div className="filterInput-container">
        <p>Phone Number</p>
        <input
          type="tel"
          placeholder="Phone Number"
          inputMode="numeric"
          className="filter-input"
        />
      </div>

      <div className="filterInput-container">
        <p>Status</p>
        <div className="status-dropdown filter-input">Select {arrowDownEmpty}</div>
      </div>

      <div className="btn">
        <button className="reset-btn">Reset</button>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default FilterUI;
