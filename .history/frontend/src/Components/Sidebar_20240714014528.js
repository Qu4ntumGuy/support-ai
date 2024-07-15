import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="mt-auto bottom-0 p-2 bg-stone-400 w-full rounded-lg ">
        <div className="text-stone-800">
          <LogoutIcon />
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
