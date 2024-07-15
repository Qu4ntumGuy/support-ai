import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="mt-auto flex items-center bottom-0 p-2 bg-stone-300 w-full rounded-lg ">
        <div className="text-stone-600">
          <LogoutIcon />
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
