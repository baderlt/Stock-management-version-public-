import { combineReducers, createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import MainDashboardAjoutEtMiseAjoure from "../DashboardStock/MainDashboardStock/MainDashboardRetrait/MainDashboardAjouteEtMiseajour/MainDashboardAjoutEtMiseAjoure";
import MainDashboardRetrait from "../DashboardStock/MainDashboardStock/MainDashboardRetrait/MainDashboardRetrait";
// import reduser_user from "./reduser_user";
import MainAppStockMui from "../DashboardStock/MainDashboardStock/mainAppStockMui/mainAppStockMui";
import MainDashboardStockRetraitStepper from "../DashboardStock/MainDashboardStock/MainDashboardRetrait/MainDashboardStockRetraitStepper";
import MainDashboardAjouterProduit from "../DashboardStock/MainDashboardStock/MainDashboardRetrait/MainDashboardAjouteEtMiseajour/MainDashboardAjouterProduit";
import MainDashboardNouveauStockHeader from "../DashboardStock/MainDashboardStock/MainDashboardRetrait/MainDashboardNouveauStock/MainDashboardNouveauStockHeader";
import MainDashboardNauveauStockBody from "../DashboardStock/MainDashboardStock/MainDashboardRetrait/MainDashboardNouveauStock/MainDashboardNauveauStockBody";
const initstate={composant:<MainAppStockMui/>}
export const redusersubmite=(state=initstate,action)=>{
    console.log(action);
    if (action.type=='nauveauStock'){
        return {...state,composant:<MainDashboardNouveauStockHeader data={action.payload}/>}
    }
    if(action.type=='ajouteProduit'){
   return{...state,composant:<MainDashboardAjouterProduit/>}
    }
   
    return state;

}
