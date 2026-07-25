import MenuItem from "./MenuItem";
import { menu } from "../utils";

function LeftSidebar() {
  return (
    <div className="w-1/6 pt-8">
      {menu.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
}

export default LeftSidebar;
