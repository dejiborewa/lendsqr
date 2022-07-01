import { useEffect, useState } from "react";
import "./userDetails.scss";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import { backArrow } from "../../assets/svg/backArrow";
import { profile } from "../../assets/svg/profile";
import { filledStar } from "../../assets/svg/filled-star";
import { unFilledStar } from "../../assets/svg/unfilled-star";
import { userDetailsMenu } from "../../data/userDetailsMenu";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const [userData, setUserData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
        );

        const response = await data.json();
        setUserData(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Layout>
      <div className="dashboard-main">
        <div>
          <p
            onClick={() => navigate("/dashboard")}
            style={{ cursor: "pointer" }}
          >
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
                <h3>
                  {userData?.profile?.firstName} {userData?.profile?.lastName}
                </h3>
                <span className="user-card-id">{userData?.accountNumber}</span>
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
                <h3>₦{userData.accountBalance}</h3>
                <span>9912345678/Providus Bank</span>
              </div>
            </div>

            <div id="user-acct2">
              <h3>₦{userData.accountBalance}</h3>
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
                  <p className="userDetails-table-data">
                    {userData?.profile?.firstName} {userData?.profile?.lastName}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">PHONE NUMBER</h4>
                  <p className="userDetails-table-data">
                    {userData?.profile?.phoneNumber}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">EMAIL ADDRESS</h4>
                  <p className="userDetails-table-data">{userData?.email}</p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">BVN</h4>
                  <p className="userDetails-table-data">
                    {userData?.profile?.bvn}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">GENDER</h4>
                  <p className="userDetails-table-data">
                    {userData?.profile?.gender}
                  </p>
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
                  <p className="userDetails-table-data">
                    {userData?.education?.level}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">
                    EMPLOYMENT STATUS
                  </h4>
                  <p className="userDetails-table-data">
                    {" "}
                    {userData?.education?.employmentStatus}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">
                    SECTOR OF EMPLOYMENT
                  </h4>
                  <p className="userDetails-table-data">
                    {" "}
                    {userData?.education?.sector}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">
                    DURATION OF EMPLOYMENT
                  </h4>
                  <p className="userDetails-table-data">
                    {" "}
                    {userData?.education?.duration}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">OFFICE EMAIL</h4>
                  <p className="userDetails-table-data">
                    {" "}
                    {userData?.education?.officeEmail}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">MONTHLY INCOME</h4>
                  <p className="userDetails-table-data">
                    ₦{userData?.education?.monthlyIncome[1]} - ₦
                    {userData?.education?.monthlyIncome[0]}
                  </p>
                </div>
                <div>
                  <h4 className="userDetails-table-heading">LOAN REPAYMENT</h4>
                  <p className="userDetails-table-data">
                    {" "}
                    ₦{userData?.education?.loanRepayment}
                  </p>
                </div>
              </div>
            </div>

            <div className="userDetails-border">
              <h4>Socials</h4>
              <div className="userDetails-table3">
                <div>
                  <h4 className="userDetails-table-heading">TWITTER</h4>
                  <p className="userDetails-table-data">
                    {userData?.socials?.twitter}
                  </p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">FACEBOOK</h4>
                  <p className="userDetails-table-data">
                    {userData?.socials?.facebook}
                  </p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">INSTAGRAM</h4>
                  <p className="userDetails-table-data">
                    {userData?.socials?.instagram}
                  </p>
                </div>
              </div>
            </div>

            <div className="userDetails-border">
              <h4>Guarantor</h4>
              <div className="userDetails-table4">
                <div>
                  <h4 className="userDetails-table-heading">FULLNAME</h4>
                  <p className="userDetails-table-data">
                    {" "}
                    {userData?.guarantor?.firstName}{" "}
                    {userData?.guarantor?.lastName}
                  </p>
                </div>

                <div>
                  <h4 className="userDetails-table-heading">PHONE NUMBER</h4>
                  <p className="userDetails-table-data">
                    {" "}
                    {userData?.guarantor?.phoneNumber}
                  </p>
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
