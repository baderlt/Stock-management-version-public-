import { BatteryAlert, CalculateSharp, MonetizationOnSharp, Money, ProductionQuantityLimits, ProductionQuantityLimitsOutlined, QueryStats, Summarize, TimeToLeave, Water } from "@mui/icons-material";
import { Button, Tab, Tabs,Box, Fab, InputLabel, Autocomplete, TextField, FormControl, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPrint} from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import StatistiquesProduitEpuise from "./StatistiquesProduitEpuise";
import excel from '../../../exceller.png'
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { motion } from "framer-motion";


/*foreach employee that has taken from this item, put his name in the tabel.
but the prblm is that there were be employees that haven't taken from an item
*/
export default function MainDashboardStockStatistiques(props){
 var date_of_today=new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const [data,setdata]=useState();
  const [data_is_load,setdata_is_load]=useState(false);
  const [fonctionnaire,setfonctionnaire]=useState()
  const [functis_load,setfunctis_load]=useState(false)
  const [consomation,setconsomation]=useState(true);
  const [produitEpuise,setproduitEpuise]=useState(false);
  useEffect( ()=>{
    axios.get('/bilan')
    .then((res)=>{setdata([res.data]),setdata_is_load(true)})
    .catch(err=>console.log(err));
      axios.get('/listeEmployees')
      .then((res)=>{setfonctionnaire(res.data),setfunctis_load(true)});
     },[])

    // pour aficher pur chaque emmplyee le quantite prise
      function sum_prise(nom,prise){
       let len=prise.length;
       let qnt=0;
       for(let i=0 ;i< len ;i++){

         if(prise[i].nom_employee==nom){
          qnt=prise[i].sum_prise;
         }
       }
        return <td className="px-6 py-4 border text-black  border-slate-900 bg-red-50 whitespace-nowrap ">{qnt}</td>;
      }
    
       
        // const printComponent = () => {
        //   const printWindow = window.open('', 'Print', 'height=600,width=800');
        //   printWindow.document.write(componentRef.current.innerHTML);
        //   printWindow.document.close();
        //   printWindow.focus();
        //   printWindow.print();
        //   printWindow.close();
        // };
        const componentRef = useRef();
        const handlePrint = useReactToPrint({ content: () => componentRef.current 
        });
    
    return(
    < div>



                    
<motion.button animate={{marginTop:'10px',marginLeft:"10px"}}>
    <button onClick={()=>{setconsomation(true),setproduitEpuise(false)}}>       
<Fab variant="extended" color="secondary">
  <QueryStats sx={{ mr: 1 }} />
  Consomation
</Fab>  
</button>
</motion.button>
<motion.button animate={{marginLeft:'20px',marginTop:'10px'}}>
<button onClick={()=>{setconsomation(false),setproduitEpuise(true)}}> 
<Fab variant="extended" color="error">
  <QueryStats sx={{ mr: 1 }} />
  Les produit Epuisé
</Fab> 
</button>    
</motion.button>
<br></br>
<motion.div animate={{marginTop:'20px',paddingLeft:'10px'}} >
<div className="flex flex-row md:flex-col h-3 ">
   
   <DownloadTableExcel
                           filename={ consomation? `Bilan__generale_ ${new Date().getFullYear()}`:'Produits_épuisé'}
                           sheet={ consomation ?`Bilan__generale_ ${new Date().getFullYear()}`:'Produits_épuisé '}
                           currentTableRef={componentRef.current}>
   <button className=" group pl-2 "><Button size="large"  variant="outlined" color="success"   >
                       
    <img src={excel} alt="excel" width={22} height={22}  className=" "/>&ensp;     Excel</Button>
    </button>
   
                   </DownloadTableExcel>
                  
                 
   <button  className="pl-4 " onClick={handlePrint}>
   
    <Button size="large"  variant="outlined" color="success"  startIcon={ <FontAwesomeIcon icon={faPrint}/>}  >  Impression</Button>
   </button>
   
   </div>
   </motion.div>

        <div className="">
          <br></br><br />
         

          <div className="" ref={componentRef}>
          <div className="text-s " style={{display:'none'}}> 
          <h3>{consomation ? <p>Bilan générale: {new Date().getFullYear()}<br></br> Date d'impression: {new Date().toLocaleDateString()}</p>
          :<p>les Produits épuisé ou Presque épuisé <br /> Date d'impression: {new Date().toLocaleDateString()}</p>}</h3></div>  
          {consomation ? 
data_is_load ? 

           
<motion.div animate={{width:'100%' }}>
    <table class="text-xm w-full text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3 border border-slate-600">
              ID
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
              Nom d'article
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                Quantite initial 
                </th>
                {functis_load? fonctionnaire.map((nom)=><th scope="col" class="px-6 py-3 border text-black border-slate-600 bg-red-100">{nom.nom_employee}</th>)
                :''}
              <th scope="col" class="px-6 py-3 border border-slate-600">
                Totale Sortie
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                Stock Final
                </th>
               
            </tr>
        </thead>   
        <tbody>
      
        {data ? data[0].map((item)=>{ return <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    
        <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black border border-slate-900">
                {item.id}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black border border-slate-900">
                {item.nom}
                </th>
                <td  class="px-6 py-4 border border-slate-900  whitespace-nowrap ">
                {item.sum}
                </td>
                {functis_load?fonctionnaire? fonctionnaire.map((item2)=> sum_prise(item2.nom_employee,item.employee) )  :''
                :''}
                <td className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black border border-slate-900">
              {item.sum - item.quntite_courant }
              </td>
              <td className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black border border-slate-900">
              {item.quntite_courant}
              </td>
           
           </tr>
   
        //    </form>
    
    }):''}
        </tbody>
    </table>
    </motion.div>


:''
:''}
{produitEpuise?
<StatistiquesProduitEpuise/>
:''}
    </div>

    
    </div>
    {/* <Print_/> */}
   
    </div>
    )
}
