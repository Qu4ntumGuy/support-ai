import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const user = localStorage.getItem("user");
  console.log(typeof user);

  return (
    <div className="p-3 md:flex md:flex-col h-screen hidden">
      <div className="p-2 text-xl hidden md:block font-semibold">
        Hii,
        <span className="ml-1"></span>
      </div>
      <div
        onClick={logoutHandler}
        className="mt-auto cursor-pointer border hover:bg-stone-300/90 flex items-center bottom-0 p-3 w-full rounded-lg "
      >
        <div className="text-stone-600">
          <LogoutIcon />
        </div>
        <div className="ml-3 text-lg hidden md:block font-semibold text-stone-700">
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
