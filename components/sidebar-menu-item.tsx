'use client'
import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export const SideBarMenuItem = ({item, toggleCollapse} : {item: SideNavItem, toggleCollapse:boolean}) => {
  const linkStyle = "flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transition duration-200"
  const ddLinkStyle = linkStyle;
  const activeLinkStyle ="rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]"
  const pathName = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu =() => {
    setSubMenuOpen(!subMenuOpen)
  }
  return (
    <>
      {
        item.submenu
        ?(<div className=" rounded-md min-w-[18px] ">
          <a className={`${ddLinkStyle} ${pathName.includes(item.path) ? activeLinkStyle : ""}`} onClick={toggleSubMenu}>
            {item.icon}
            {
              !toggleCollapse &&
              <>
                <span className="ml-3 text-base leading-6 font-semibold">{item.title}</span>
              </>
            }
          </a>
        </div>)
        :(<Link href={item.path} className={`${linkStyle} ${item.path === pathName ? activeLinkStyle : ''}`}>
          {item.icon}
          {!toggleCollapse &&<span className="ml-6 leading-6 font-semibold">{item.title}</span>}
        </Link>)
      }
    </>
  )
    
  
}