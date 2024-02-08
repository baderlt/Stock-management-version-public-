import { useState } from "react"
import AsideDashboardStock from "./AsideDashboardStock/AsideDashboardStock"
import MainDashboardStock from "./MainDashboardStock/MainDashboardStock"
import MainDashboardRetrait from "./MainDashboardStock/MainDashboardRetrait/MainDashboardRetrait";
// import MaineDashboardMiseAjoure from "./MainDashboardStock/MainDashboardRetrait/MaineDashboardMiseAjoure";
import MainDashboardAjoutEtMiseAjoure from "./MainDashboardStock/MainDashboardRetrait/MainDashboardAjouteEtMiseajour/MainDashboardAjoutEtMiseAjoure";
// import MainDashboardAjouterProduit from "./MainDashboardStock/MainDashboardRetrait/MainDashboardAjouteEtMiseajour/MainDashboardAjouterProduit";
import { useSelector } from "react-redux";
import MainDashboardStockRetraitStepper from "./MainDashboardStock/MainDashboardRetrait/MainDashboardStockRetraitStepper";
import MainAppStockMui from "./MainDashboardStock/mainAppStockMui/mainAppStockMui";
import MainDashboardStockHistorique from "./MainDashboardStock/MaiDashboardHistoriques/MainDashboardStockHistorique";
import MainDashboardStockConfiguration from "./MainDashboardStock/MainDashboardStockConfiguration/MainDashboardStockConfiguration";
import MainDashboardStockStatistiques from "./MainDashboardStock/MainDashboardStatistique/MainDashboardStockStatistiques";
import Profile from "./MainDashboardStock/MainDashboardProfile/Profile";
import Mantenamce from "./MainDashboardStock/MainDashboardProfile/mantenance";
export default function DashboardStockApp(props){
    const state_globale=useSelector((state)=>state)


    const [composant,setcomposant]=useState(state_globale.reduser_submite.composant);
    // const [composant_pour_stock,setcomposant_pour_stock]=useState();
    
    
    function ajoute(type){
        switch (type){
            case 'retrait':setcomposant(<MainDashboardStockRetraitStepper/>);
             break;
            case 'stock':setcomposant(<MainAppStockMui />);
            break;
            case 'historique':setcomposant(<MainDashboardStockHistorique />);
            break;
            case 'Configuration':setcomposant(<MainDashboardStockConfiguration />);
            break;
            case 'bilan':setcomposant(<MainDashboardStockStatistiques />);
            break;
            case 'support':setcomposant(<Mantenamce />);
            break;
           
        }

    }

    return(
        <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
            <AsideDashboardStock  class={'red'} ajout={ajoute}/>
            <MainDashboardStock  ajout={composant}/>
        </div>
    )
}