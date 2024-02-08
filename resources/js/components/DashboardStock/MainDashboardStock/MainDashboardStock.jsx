import { useState } from "react"
import { main } from "@popperjs/core"
export default function MainDashboardStock(props){

    return(
        <div className="basis-4/5  bg-gradient-to-b from-purple-100 to-blue-100">
            {/* {props.composant} */}
            {/* <MainDashboardRetrait/> */}
            {/* <MainDashboardAjoutEtMiseAjoure ajout={ajout}/><br/> */}
         
            {props.ajout}
            
            {/* <MainDashboardAjouterProduit/> */}
            {/* {composant} */}
        </div>
    )
}