import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <div className="p-3 flex flex-col h-screen">
      <div className="mt-auto cursor-pointer border hover:bg-stone-400 my-2 flex items-center bottom-0 p-2 bg-stone-300/75 w-full rounded-lg ">
        <div className="text-stone-600">
          <LogoutIcon />
        </div>
        <div className="ml-4">Logout</div>
      </div>
    </div>
  );
}

export default Sidebar;
