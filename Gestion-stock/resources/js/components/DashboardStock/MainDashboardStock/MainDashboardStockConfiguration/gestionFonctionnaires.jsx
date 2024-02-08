import { Group, Groups3, Person3 } from "@mui/icons-material";
import { Button,Fab,Grid,Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayGridTemplate from "./DisplayGridTemplate";
import AjouterNouveauEmployee from "./ajouterNouveauEmployee";
import TableEmployeeTemplate from "./tableEmployeeTemplate";
import { useSelector } from "react-redux";
export default function GestionFonctionnaires(props){
    const [listeFonctionnaires,setlisteFonctionnaires]=useState("");
    const [refresh,setRefresh]=useState(false);
    const [valider, setValider]=useState(false);
    const selector=useSelector((state)=>state.refreshFonctionnaires)
    // useEffect(async()=>{
    //     //axios.get("/listeEmployees").then((result)=>{dd(result.data[0].nom_employee)});
    //     await axios.get("/listeEmployees").then((result)=>{setlisteFonctionnaires(result.data)});
    // },[])
    useEffect(()=>{
        //axios.get("/listeEmployees").then((result)=>{dd(result.data[0].nom_employee)});
         axios.get("/listeEmployees").then((result)=>{setlisteFonctionnaires(result.data)});
    },[refresh,valider])
    function aFunction(arg){
        setRefresh(!refresh)
    }
    function forceAjoutUpdate(){
        setUpdate(selector)
    }
    return(
        
        <div>
    
             <DisplayGridTemplate fabHeader="Liste des fonctionnaires"  startIcon={<Group/>}
              databaseContent={<TableEmployeeTemplate rows={listeFonctionnaires} refresh={aFunction}/> }
             newEmployee={<AjouterNouveauEmployee update={forceAjoutUpdate} valider={(e)=>{
                setValider(!valider)
             }}/>}/>
        </div>
    )
}
// databaseContent={listeFonctionnaires}

// databaseContent={listeFonctionnaires.map((employee)=>{employee.nom_employee})}


// databaseContent={listeFonctionnaires? listeFonctionnaires.map((employee)=>employee.nom_employee):"" }