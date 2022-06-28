import { logo } from "../../assets/svg/logo";
import "./welcome.scss";
import SignIn from "../../assets/images/signIn.webp";

export default function Welcome() {
  return (
    <section className="welcome">
      <nav>
        <div className="logo">{logo}</div>
      </nav>
      <img src={SignIn} className="signIn-image" alt="signIn" />
      <div>
        <div>
          <form>
            <div>
              <h1 className="welcome-heading">Welcome</h1>
              <p>Enter details to login</p>
            </div>
            <div>
              <input type="email" placeholder="Email" />
              <div>
                <input type="password" placeholder="Password" />
                <p>SHOW</p>
              </div>
            </div>
            <p>FORGOT PASSWORD</p>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
      <div></div>
    </section>
  );
}
