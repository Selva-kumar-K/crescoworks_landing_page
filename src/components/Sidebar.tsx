
import { menus } from "../libs/menus";

type Props = {
    open : boolean,
    close : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({open, close} : Props) {
  return (
    <div className={`absolute w-[90%] bg-white h-full top-0 ${open ? "block" : "hidden"}`}>
         <div className="text-right">
            <button className="bg-blue-700 text-white px-3 py-1 font-semibold" onClick={() => close(prev => !prev)}>X</button>
        </div>
        <div className="px-8">
        <div className="">
            <h2 className="font-bold text-lg">MENU</h2>
            <ul className="flex flex-col space-y-5 mt-8 ">
                {menus.map((menu,index) => (
                    <li className={`border-t-[1px] border-slate-300 font-semibold text-lg py-3 text-slate-500 ${index === 0 ? "text-blue-500" : ""}`}>{menu}</li>
                ))}
            </ul>
        </div>
        </div>
    
         
    </div>
  )
}
