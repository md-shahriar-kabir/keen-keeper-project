// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Home, Clock, BarChart2, Menu, X } from "lucide-react";

// const navItems = [
//   { label: "Home", icon: Home, href: "/" },
//   { label: "Timeline", icon: Clock, href: "/timeline" },
//   { label: "Stats", icon: BarChart2, href: "/stats" },
// ];

// const Navbar = ()=> {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full border-b border-[#E9E9E9] bg-white">
//       <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
//         {/* Logo */}
//         <Link href="/" className="text-gray-900 text-lg tracking-tight">
//           <span className="font-bold">Keen</span>
//           <span className="text-[#244D3F]">Keeper</span>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex gap-2">
//           {navItems.map(({ label, icon: Icon, href }) => (
//             <Link
//               key={href}
//               href={href}
//               className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition
//               ${
//                 pathname === href
//                   ? "bg-[#1e4d3a] text-white"
//                   : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
//               }`}>
//               <Icon size={15} />
//               {label}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile & Tablet Toggle */}
//         <button
//           className="lg:hidden text-gray-500 hover:text-gray-900"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile & Tablet Menu */}
//       {open && (
//         <div className="lg:hidden border-t px-6 py-3 flex flex-col gap-1 bg-white">
//           {navItems.map(({ label, icon: Icon, href }) => (
//             <Link
//               key={href}
//               href={href}
//               onClick={() => setOpen(false)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition
//               ${
//                 pathname === href
//                   ? "bg-[#1e4d3a] text-white"
//                   : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
//               }`}
//             >
//               <Icon size={15} />
//               {label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import NavButton from "./NavButton";




const NavBar = () => {
  const navItems = [
    { path: "/", name: "Home", icon: <IoHomeOutline /> },
    { path: "/timeline", name: "TimeLine", icon: <IoMdTime /> },
    { path: "/states", name: "States", icon: <FaChartLine /> }
  ];
  return (
    <div className={` navbar bg-base-100 shadow-sm justify-between`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
             {navItems.map((nav,i)=> <NavButton key={i} nav={nav}/>
          )}
          </ul>
        </div>
        <Link href="/" className=" text-2xl font-semibold">
         {" "}
         <span className="font-bold">Keen</span>
          <span className="text-[#244d3f]">Keeper</span>
       </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          {navItems.map((nav,i)=> <NavButton key={i} nav={nav}/>
          )}
        </ul>
      </div>
      
    </div>
    // <div className="navbar bg-base-100 items-center shadow-sm justify-center">
    //   <div className="flex-1">
    //     <Link href="/" className=" text-2xl font-semibold">
    //       {" "}
    //       <span className="font-bold">Keep</span>
    //       <span className="text-[#244d3f]">Keeper</span>
    //     </Link>
    //   </div>
    //   <div className="">
    //     <ul className="menu menu-horizontal space-x-5">
    //       {navItems.map((nav,i)=> <NavButton key={i} nav={nav}/>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default NavBar;