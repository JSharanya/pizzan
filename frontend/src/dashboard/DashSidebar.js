import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const DashSidebar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
       <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="text-black !important hover:text-gray-800">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/menu" icon={HiViewBoards} className="text-black !important hover:text-gray-800">
          Menu 
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/reservation" icon={HiInbox} className="text-black !important hover:text-gray-800">
          Reservation 
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="text-black !important hover:text-gray-800">
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} className="text-black !important hover:text-gray-800">
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight} className="text-black !important hover:text-gray-800">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable} className="text-black !important hover:text-gray-800">
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className="text-black !important hover:text-gray-800">
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} className="text-black !important hover:text-gray-800">
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy} className="text-black !important hover:text-gray-800">
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
