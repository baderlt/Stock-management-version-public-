import { Outlet, Link } from "react-router-dom"
export default function ButtonAsideDashboard(props){
    return(

        <button className="text-xl flex gap-x-4 items-center py-2 text-white hover:text-red-600 group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 ">
             <i className="text-white">  {props.iconInTag}</i>
            {props.value}
        </button>
    )
}