import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <div className="p-3 flex flex-col h-screen">
      <div className="mt-auto cursor-pointer border hover:bg-stone-300/90 my-2 flex items-center bottom-0 p-3 w-full rounded-lg ">
        <div className="text-stone-600">
          <LogoutIcon />
        </div>
        <div className="ml-4">Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
