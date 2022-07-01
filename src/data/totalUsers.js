import { activeUser } from "../assets/svg/active-dash";
import { users } from "../assets/svg/user-dash";
import { userLoan } from "../assets/svg/userloan-dash";
import { userSavings } from "../assets/svg/userSaving-dash";

export const totalUsers = [
  {
    icon: users,
    background: "rgba(223, 24, 255, 0.1)",
    field: "USER",
    numbers: 2453,
  },
  {
    icon: activeUser,
    background: "rgba(87, 24, 255, 0.1)",
    field: "ACTIVE USERS",
    numbers: 2453,
  },
  {
    icon: userLoan,
    background: "rgba(245, 95, 68, 0.1)",
    field: "USER WITH LOANS",
    numbers: 12453,
  },
  {
    icon: userSavings,
    background: "rgba(255, 51, 102, 0.1)",
    field: "USERS WITH SAVINGS",
    numbers: 102453,
  },
];
