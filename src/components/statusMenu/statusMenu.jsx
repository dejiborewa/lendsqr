import { activate } from "../../assets/svg/activate";
import { blacklist } from "../../assets/svg/blacklist";
import { eye } from "../../assets/svg/eye";
import "./statusMenu.scss";

export default function StatusMenu({ id }) {
  return (
    <div id={`statusMenu-${id}`} className="statusMenu">
      <p>
        {eye}
        <span>View Details</span>
      </p>
      <p>
        {blacklist}
        <span>Blacklist User</span>
      </p>
      <p>
        {activate}
        <span>Activate User</span>
      </p>
    </div>
  );
}
