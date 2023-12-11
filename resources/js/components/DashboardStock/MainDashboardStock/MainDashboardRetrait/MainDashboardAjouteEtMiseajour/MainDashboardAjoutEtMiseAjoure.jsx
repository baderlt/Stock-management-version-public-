// import axios from "axios";
// import { useEffect, useState } from "react"
import React from "react";
import MainDashboardAjouterProduit from "./MainDashboardAjouterProduit";
import MaineDashboardMiseAjoure from "./MaineDashboardMiseAjoure";
import { useSelector,useDispatch} from "react-redux";
import MainDashboardNouveauStockHeader from "../MainDashboardNouveauStock/MainDashboardNouveauStockHeader";
import { bindActionCreators } from "redux";
import { useState } from "react";
import { useEffect } from "react";



export default function MainDashboardAjoutEtMiseAjoure(props){
    const[data,setdata]=useState()
    const [classnameM,setclassnameM]=useState("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ");
    const [classnameA,setclassnameA]=useState("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ");
    const [classnameN,setclassnameN]=useState("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ");
  

    const dispatch=useDispatch();
    const state_globale=useSelector((state)=>state)


  function misseajour_stock(type){
//   const  action={type:type,payload:<MaineDashboardMiseAjoure/>};
//     dispatch(action)
setclassnameN("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
setclassnameA("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
setclassnameM("bg-lime-600  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
setdata(<MaineDashboardMiseAjoure/>)
  }


  function ajoute_stock(type){
    // const  action={type:type,payload:<MainDashboardAjouterProduit/>};
    //   dispatch(action)
setclassnameN("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
setclassnameA("bg-lime-600  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
setclassnameM("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
setdata(<MainDashboardAjouterProduit/>)
    }
    function Nouveau_stock(type){
      // const  action={type:type,payload:<MainDashboardAjouterProduit/>};
      //   dispatch(action)
setclassnameN("bg-lime-600  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
  setclassnameA("bg-blue-600  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
  setclassnameM("bg-blue-800  p-1  outline-1 text-white  grow hover:bg-lime-700  hover:text-white ml-2 ease-in duration-100 ")
  setdata(<MainDashboardNouveauStockHeader/>)
      }
        return(
        <div onLoad={()=>{setdata()}}>
          <br></br>
             <button className={classnameM} style={{fontFamily: "system-ui"}} onClick={()=>{misseajour_stock('mise')}}>
            {/* {props.iconInTag}&ensp; */}
            {/* {props.value} */}
            Mise à joure de Stock
    </button>&ensp;
    <button className={classnameA}
     style={{fontFamily: "system-ui"}} onClick={()=>{ajoute_stock('ajoute')}}>
            {/* {props.iconInTag}&ensp; */}
            {/* {props.value} */}
           Ajouter Produits
    </button>
    
    <button className={classnameN}
     style={{fontFamily: "system-ui"}} onClick={()=>{Nouveau_stock('Nouveau')}}>
            {/* {props.iconInTag}&ensp; */}
            {/* {props.value} */}
           Nouveau Stock
    </button>
    <br></br>
    <br></br>
    <hr/><br></br>

   
   {data}
   <br></br>
   
    
        </div>
    )
}