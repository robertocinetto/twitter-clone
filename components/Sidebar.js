import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { DotsHorizontalIcon, HomeIcon } from "@heroicons/react/solid";
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image src="https://cdn.usbrandcolors.com/images/logos/twitter-logo.svg" width="50" height="50"></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline ">
        Tweet
      </button>

      {/* Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQG9zS9E_K_yBw/profile-displayphoto-shrink_200_200/0/1629828640402?e=1657152000&v=beta&t=TWzLQvTcyQLsilsoQeiOiNt5SBO5q9Qsw3zvKLF2950"
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Roberto Cinetto</h4>
          <p className="text-gray-500">@robertocinetto</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
