import "./layout.scss";
import MenuDesktop from "../menuDesktop/menuDesktop";
import Navbar from "../navbar/navbar";


export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      <div className="sidebar-content">
        <MenuDesktop />
        {children}
      </div>
    </section>
  );
}
