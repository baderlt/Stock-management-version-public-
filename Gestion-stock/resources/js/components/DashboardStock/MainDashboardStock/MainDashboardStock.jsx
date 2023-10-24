import { useState } from "react"
import { main } from "@popperjs/core"
export default function MainDashboardStock(props){

    return(
        <div className="basis-4/5  bg-gradient-to-b from-purple-50 to-blue-50">
            {/* {props.composant} */}
            {/* <MainDashboardRetrait/> */}
            {/* <MainDashboardAjoutEtMiseAjoure ajout={ajout}/><br/> */}
         
            {props.ajout}
            
            {/* <MainDashboardAjouterProduit/> */}
            {/* {composant} */}
        </div>
    )
}