import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const DashSidebar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="min-h-full">
       <Sidebar.Logo href="#" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbROL19EYpPToHDwbj5jo-53IWU8oeLMl-8A&s" imgAlt="">
        Pizzan
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup className="h-96">
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="text-black !important hover:text-gray-800">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/menu" icon={HiViewBoards} className="text-black !important hover:text-gray-800">
          Menu 
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/reservation" icon={HiInbox} className="text-black !important hover:text-gray-800">
          Reservation 
          </Sidebar.Item>
         
          <Sidebar.Item href="#"  className="text-black !important hover:text-gray-800">
           
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup className="h-52">
          <Link to='/signin'>
          <Sidebar.Item href="#" icon={HiTable} className="text-black !important hover:text-gray-800">
          Sign In
          </Sidebar.Item>
          </Link>
       
    </Sidebar.ItemGroup>   
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
