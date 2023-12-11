// import { Button } from "@mui/material";

// export default function GestionArticles(props){
//     return(
//         <div>
//             <Button>Liste de tous les articles</Button>
//         </div>
//     )
// }
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayGridTemplate from "./DisplayGridTemplate";
import AjouterNouveauEmployee from "./ajouterNouveauEmployee";
import TableArticleTemplate from "./tableEmployeeTemplate";
import { useSelector } from "react-redux";
import AjouterNouveauArticle from "./ajouterNouveauArticle";
import TableArticle from "./tableArticleTemplate";
import { Category } from "@mui/icons-material";
export default function GestionArticles(props){
    const [listeArticles,setListeArticles]=useState("");
    const [refresh,setRefresh]=useState(false);
    const [valider, setValider]=useState(false);
    //const selector=useSelector((state)=>state.refreshFonctionnaires)
    // useEffect(async()=>{
    //     //axios.get("/listeEmployees").then((result)=>{dd(result.data[0].nom_employee)});
    //     await axios.get("/listeEmployees").then((result)=>{setlisteFonctionnaires(result.data)});
    // },[])
    useEffect(()=>{
        //axios.get("/listeEmployees").then((result)=>{dd(result.data[0].nom_employee)});
         axios.get("/listeArticles").then((result)=>{setListeArticles(result.data)});
    },[refresh,valider])
    function aFunction(arg){
        setRefresh(!refresh)
    }
    function forceAjoutUpdate(){
        setUpdate(selector)
    }
    return(
        
        <div>
            {/* {console.log(listeFonctionnaires)} */}
             <DisplayGridTemplate fabHeader="Liste des types d'articles" startIcon={<Category/>}
              databaseContent={<TableArticle rows={listeArticles} refresh={aFunction}/> }
             newEmployee={<AjouterNouveauArticle update={forceAjoutUpdate} valider={(e)=>{
                setValider(!valider)
             }}/>}/>
        </div>
    )
}