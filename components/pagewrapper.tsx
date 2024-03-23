import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
import { ReactNode } from "react";

export default function Pagewrapper({children} : {children: ReactNode}) {
  const {toggleCollapse} = useSideBarToggle();
  const pageStyle= classNames("bg-slate-50 flex-grow text-black p-2 mt-16",{
    ["sm:pl-[20rem]"]: !toggleCollapse,
    ["sm:pl-[5.6rem]"]: toggleCollapse
  })
  return(
    <div className={pageStyle}>
      {children}
    </div>
  )
}