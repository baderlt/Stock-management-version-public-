import AsideDashboardStock from "./AsideDashboardStock/AsideDashboardStock"
import MainAppStockMui from "./MainDashboardStock/mainAppStockMui/mainAppStockMui"
export default function AppStockMui(props){

    return(
        <div id="testGradient" className="testGradient w-screen min-h-screen flex 
        bg-gradient-to-tl from-yellow-50 via-yellow-50 to-red-50">
            {/* bg-gradient-to-tl from-indigo-50 via-red-100 to-yellow-50 */}
            {/* bg-gradient-to-tl from-yellow-100 via-yellow-100 to-indigo-100 */}
            {/* id="testGradient" */}
            {/* <div className="basis-1/4 ">
                <LeftAsideAppStockMui/>
            </div> */}
                <div className="basis-1/5 min-h-screen">
                    {/* <button onClick={()=>document.getElementsByClassName("testGradient").id="testGradient"}>
click me
                    </button> */}
                    <AsideDashboardStock/>
                </div>
                <div className="basis-4/5">
                    <MainAppStockMui/>
                </div>
        </div>
    )
}