import { createStore } from "redux"
import { NEW_STOCK_CREATION_COMPLETED,PRODUCTS_ADDED_COMPLETED,GO_NEXT_STEP_STOCK_AND_PRODUCTS_CREATION } from "./actions";
import NewProductComponent from "../DashboardStock/MainDashboardStock/mainAppStockMui/MainDashboardStockProducts/NewProductComponent";
import MainDashboardStockProducts from "../DashboardStock/MainDashboardStock/mainAppStockMui/MainDashboardStockProducts/MainDashboardStockProducts";
import MainDashboardStockRetraitStepper from "../DashboardStock/MainDashboardStock/MainDashboardRetrait/MainDashboardStockRetraitStepper";
import MainDashboardStockConfiguration from "../DashboardStock/MainDashboardStock/MainDashboardStockConfiguration/MainDashboardStockConfiguration";

import GestionArticles from "../DashboardStock/MainDashboardStock/MainDashboardStockConfiguration/gestionArticles";
import GestionFonctionnaires from "../DashboardStock/MainDashboardStock/MainDashboardStockConfiguration/gestionFonctionnaires";
// import MainDashboardStockStatistiques from "../mainAppStockMui/MainDashboardStockStatistiques/MainDashboardStockStatistiques";
// import MainDashboardStockHistorique from "../mainAppStockMui/MainDashboardStockHistorique/MainDashboardStockHistorique";
let myState={
    isStockCreated:false,
    applyStyleWhenStockCreationCompleted:"",

    areProductsAdded:false,
    applyStyleWhenProductsAddedCompleted:"",

    activeStepNewStockAndProducts:0,

    expandAjoutArticles:false,

    articlesEnCache:[<NewProductComponent classname="ease-in duration-300"/>],

    showValidateProductsAndStore:null,

    routeView:<MainDashboardStockProducts/>,

    configurationContent:<GestionFonctionnaires/>,

    refreshFonctionnaires:0
    
    // naviguerStatistiques:
};

export function stepperCompletionReducer(state=myState,action){
    switch(action.type){
        case NEW_STOCK_CREATION_COMPLETED:
            //comment je le ferias sans le spread 
            //let newState={isStockCreated:true,areProductsAdded:false}
            let newSpreadState={...state}
            newSpreadState.isStockCreated=true;
            newSpreadState.applyStyleWhenStockCreationCompleted={
                ".Mui-completed":{color:"green"},
                ".MuiStepLabel-label":{color:"black"}               
            }
            newSpreadState.activeStepNewStockAndProducts=1
            newSpreadState.expandAjoutArticles=true;
            console.log(newSpreadState)
            return newSpreadState;

        case PRODUCTS_ADDED_COMPLETED:
            //let newStateProducts={isStockCreated:false,areProductsAdded:true}
            let newSpreadStateProducts={...state}
            newSpreadStateProducts.areProductsAdded=true
            return newStateProducts
        case GO_NEXT_STEP_STOCK_AND_PRODUCTS_CREATION:
            let newSpreadStateStockAndProductsActiveStep={...state}
            newSpreadStateStockAndProductsActiveStep.activeStepNewStockAndProducts++
            //console.log(newSpreadStateStockAndProductsActiveStep)
            return newSpreadStateStockAndProductsActiveStep

        case "AJOUTER_ARTICLE_AU_CACHE":
            let newSpreadStateArticleEnCache={...state}
            newSpreadStateArticleEnCache.areProductsAdded=true
            newSpreadStateArticleEnCache.applyStyleWhenProductsAddedCompleted={
                ".Mui-completed":{color:"green"},
                ".MuiStepLabel-label":{color:"black"}  
            }
            newSpreadStateArticleEnCache.activeStepNewStockAndProducts=2
            newSpreadStateArticleEnCache.articlesEnCache.unshift(<NewProductComponent/>)
            let myNewArticles=[...newSpreadStateArticleEnCache.articlesEnCache]
            //myNewArticles=myNewArticles.sort()
            newSpreadStateArticleEnCache.articlesEnCache=[...myNewArticles]
            newSpreadStateArticleEnCache.articlesEnCache=newSpreadStateArticleEnCache.articlesEnCache
            //console.log(myNewArticles)
            return newSpreadStateArticleEnCache

            //Routes
            case "ROUTE_STOCK":
                let newRouteStock={...state};
                newRouteStock.routeView=<MainDashboardStockProducts/>
                return newRouteStock
            case "ROUTE_RETRAIT":
                let newRouteRetrait={...state}
                newRouteRetrait.routeView=<MainDashboardStockRetraitStepper/>
                return newRouteRetrait

            case "ROUTE_CONFIGURATION":
                let newRouteConfiguration={...state}
                newRouteConfiguration.routeView=<MainDashboardStockConfiguration/>
                return newRouteConfiguration

                case "AFFICHIER_GESTION_ARTICLES":
                    let newConfigurationContentArticles={...state}
                    newConfigurationContentArticles.configurationContent=<GestionArticles/>
                    return newConfigurationContentArticles
                case "AFFICHIER_GESTION_FONCTIONNAIRES":
                    let newConfigurationContentFonctionnaires={...state}
                    newConfigurationContentFonctionnaires.configurationContent=<GestionFonctionnaires/>
                    return newConfigurationContentFonctionnaires

            case "ROUTE_STATISTIQUE":
                    let newRouteStats={...state}
                    newRouteStats.routeView=<MainDashboardStockStatistiques/>
                    return newRouteStats

            case "ROUTE_HISTORIQUE":
                    let newRouteHistory={...state}
                    newRouteHistory.routeView=<MainDashboardStockHistorique/>
                    return newRouteHistory

            case "FORCER_UN_REFRESH":
                let refreshTableState={...state};
                refreshTableState.refreshFonctionnaires+=1
                return refreshTableState
                
        default:
            return myState
    }
}

// export const myStore=createStore(stepperCompletionReducer)