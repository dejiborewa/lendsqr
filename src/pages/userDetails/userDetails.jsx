import { useState } from "react";
import "./userDetails.scss";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import { backArrow } from "../../assets/svg/backArrow";
import { profile } from "../../assets/svg/profile";
import { filledStar } from "../../assets/svg/filled-star";
import { unFilledStar } from "../../assets/svg/unfilled-star";
import { userDetailsMenu } from "../../data/userDetailsMenu";

export default function UserDetails() {
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="dashboard-main">
        <div>
          <p onClick={() => navigate("/dashboard")}>
            {backArrow}
            <span style={{ marginLeft: "0.5em" }}>Back to User</span>
          </p>

          <div className="userDetails-btn">
            <h3 className="userDetails-heading">User Details</h3>
            <div id="user-btn1">
              <button className="user-blacklist">BLACKLIST USER</button>
              <button className="user-active">ACTIVATE USER</button>
            </div>
          </div>

          <div id="user-btn2">
            <button className="user-blacklist">BLACKLIST USER</button>
            <button className="user-active">ACTIVATE USER</button>
          </div>

          <div className="user-card">
            <div className="user-card-info">
              <div className="profile-container">
                <span>{profile}</span>
              </div>

              <div className="user-card-name">
                <h3>Grace Effiom</h3>
                <span className="user-card-id">LSQFf587g90</span>
              </div>

              <div className="user-card-tier">
                <span>User's tier</span>
                <div className="user-card-stars">
                  <span>{filledStar}</span>
                  <span>{unFilledStar}</span>
                  <span>{unFilledStar}</span>
                </div>
              </div>

              <div id="user-acct1">
                <h3>₦200,000.00</h3>
                <span>9912345678/Providus Bank</span>
              </div>
            </div>

            <div id="user-acct2">
              <h3>₦200,000.00</h3>
              <span>9912345678/Providus Bank</span>
            </div>

            <ul className="userDetails-menu">
              {userDetailsMenu.map((item, index) => (
                <li
                  key={index}
                  className={`${activeTab === index && `activeTab`}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="userDetails-table-container">
            <div className="userDetails-border">
              <h4>Personal Information</h4>
              <div className="userDetails-table">
                <div>
                  <h4 className="userDetails-table-heading">FULL NAME</h4>
                  <p className="userDetails-table-data">Grace Effiom</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">PHONE NUMBER</h4>
                  <p className="userDetails-table-data">07011223344</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">EMAIL ADDRESS</h4>
                  <p className="userDetails-table-data">grace@gmail.com</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">BVN</h4>
                  <p className="userDetails-table-data">07060780922</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">GENDER</h4>
                  <p className="userDetails-table-data">Female</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">MARITAL STATUS</h4>
                  <p className="userDetails-table-data">Single</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">CHILDREN</h4>
                  <p className="userDetails-table-data">None</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">
                    TYPE OF RESIDENCE
                  </h4>
                  <p className="userDetails-table-data">Parent’s Apartment</p>
                </div>
              </div>
            </div>

            <div className="userDetails-border">
              <h4>Education and Employment</h4>
              <div className="userDetails-table2">
                <div>
                  <h4 className="userDetails-table-heading">
                    LEVEL OF EDUCATION
                  </h4>
                  <p className="userDetails-table-data">B.Sc</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">
                    EMPLOYMENT STATUS
                  </h4>
                  <p className="userDetails-table-data">Employed</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">
                    SECTOR OF EMPLOYMENT
                  </h4>
                  <p className="userDetails-table-data">FinTech</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">
                    DURATION OF EMPLOYMENT
                  </h4>
                  <p className="userDetails-table-data">2 years</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">OFFICE EMAIL</h4>
                  <p className="userDetails-table-data">grace@lendsqr.com</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">MONTHLY INCOME</h4>
                  <p className="userDetails-table-data">
                    ₦200,000.00- ₦400,000.00
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">LOAN REPAYMENT</h4>
                  <p className="userDetails-table-data">40,000</p>
                </div>
              </div>
            </div>

            <div className="userDetails-border">
              <h4>Socials</h4>
              <div className="userDetails-table3">
                <div>
                  <h4 className="userDetails-table-heading">TWITTER</h4>
                  <p className="userDetails-table-data">@grace_effiom</p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">FACEBOOK</h4>
                  <p className="userDetails-table-data">Grace Effiom</p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">INSTAGRAM</h4>
                  <p className="userDetails-table-data">@grace_effiom</p>
                </div>
              </div>
            </div>

            <div className="userDetails-border">
              <h4>Guarantor</h4>
              <div className="userDetails-table4">
                <div>
                  <h4 className="userDetails-table-heading">FULLNAME</h4>
                  <p className="userDetails-table-data">Debby Ogana</p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">PHONE NUMBER</h4>
                  <p className="userDetails-table-data">07012345678</p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">EMAIL ADDRESS</h4>
                  <p className="userDetails-table-data">debby@gmail.com</p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">RELATIONSHIP</h4>
                  <p className="userDetails-table-data">Sister</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// <div className="userDetails-table">
// <div>
//   <h4>{userDetailsTable.section}</h4>
//   <div className="userDetails-table-header">
//     {userDetailsTable.header.map((item, index) => (
//       <div key={index}>{item}</div>
//     ))}
//   </div>

//   <div>
//     {userDetailsTable.data.map((user, index) => (
//       <div key={index} className="userDetails-table-body">
//         <p>{user.fullName}</p>
//         <p>{user.phone}</p>
//         <p>{user.email}</p>
//         <p>{user.bvn}</p>
//         <p>{user.gender}</p>
//       </div>
//     ))}
//   </div>
// </div>

// <div className="userDetails-row2">
//   <div className="userDetails-table-header">
//     {userDetailsTable.header2.map((item, index) => (
//       <div key={index}>{item}</div>
//     ))}
//   </div>

//   <div>
//     {userDetailsTable.data2.map((user, index) => (
//       <div key={index} className="userDetails-table-body">
//         <p>{user.maritalStatus}</p>
//         <p>{user.children}</p>
//         <p>{user.type}</p>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
