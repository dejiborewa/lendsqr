import { users } from "../../src/assets/svg/users";
import { sack } from "../../src/assets/svg/sack";
import { handshake } from "../../src/assets/svg/handshake";
import { piggy } from "../../src/assets/svg/piggy";
import { whitelist } from "../assets/svg/whitelist";
import { karma } from "../assets/svg/karma";
import { loanReq } from "../assets/svg/loanReq";
import { friends } from "../assets/svg/friends";
import { switchOrg } from "../assets/svg/briefcase";
import { savingsProd } from "../assets/svg/savingsProd";
import { fee } from "../assets/svg/fee";
import { transaction } from "../assets/svg/transaction";
import { services } from "../assets/svg/services";
import { servicesAcct } from "../assets/svg/servicesAcct";
import { settlement } from "../assets/svg/settlement";
import { report } from "../assets/svg/report";

export const sidebar = {
  customer: [
    {
      icon: friends,
      text: "Users",
    },
    {
      icon: users,
      text: "Guarantors",
    },
    {
      icon: sack,
      text: "Loans",
    },
    {
      icon: handshake,
      text: "Decision Models",
    },
    {
      icon: piggy,
      text: "Savings",
    },
    {
      icon: loanReq,
      text: "Loan Requests",
    },
    {
      icon: whitelist,
      text: "Whitelist",
    },
    {
      icon: karma,
      text: "Karma",
    },
  ],
  businesses: [
    {
      icon: switchOrg,
      text: "Organization",
    },
    {
      icon: loanReq,
      text: "Loan Products",
    },
    {
      icon: savingsProd,
      text: "Savings Products",
    },
    {
      icon: fee,
      text: "Fees and Charges",
    },
    {
      icon: transaction,
      text: "Transactions",
    },
    {
      icon: services,
      text: "Services",
    },
  ],

  settings: [
    {
      icon: servicesAcct,
      text: "Service Account",
    },
    {
      icon: settlement,
      text: "Settlements",
    },
    {
      icon: report,
      text: "Reports",
    },
  ],
};
