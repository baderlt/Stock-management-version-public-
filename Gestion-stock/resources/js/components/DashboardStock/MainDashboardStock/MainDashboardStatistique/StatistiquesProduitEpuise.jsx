import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import axios from "axios";
import { entriesIn } from "lodash";
import { useEffect } from "react";
import { useState } from "react"

export default function StatistiquesProduitEpuise(){
    
    const [produit,setproduit]=useState();
    const [is_load,setis_load]=useState(false);
    useEffect(()=>{
        
produit_Epuise(0);
console.log('tt');
    },[])
     function produit_Epuise(qnt){
     axios.get('/produit_Epuise/'+qnt)
        .then((res)=>{setproduit(res.data);setis_load(true)})
        .catch(err=>console.log(err));
       
    }
    return <div>
         <FormControl o variant="standard" sx={{ ml: 1, minWidth: 160 }} >
                <InputLabel  id="demo-simple-select-standard-label">Quantite</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
               defaultValue={0}
                label="Age" onChange={(e)=>{produit_Epuise(e.target.value)}} >
                 <MenuItem value={0} > Epuisé</MenuItem>
                 <MenuItem value={20} >Entre 20 Et 0</MenuItem>
                <MenuItem value={50}>Entre 50 Et 0</MenuItem>
                </Select>
        </FormControl> 
    
   
       {is_load? 
    
       <div className="relative">
        <br />
       <table class="w-100 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                Nom d'article
                </th>
                <th scope="col" class="px-6 py-3">
                Quantite 
                </th>
                {/* <th scope="col" class="px-6 py-3">
                 Date
                </th> */}
            </tr>
        </thead>
        {produit.length >=1  ? produit.map((item)=>
      <tbody> <tr class="bg-white border-b dark:bg-black-900 dark:border-gray-700">
    
      <td class="px-6 py-4">
      <b>{item.nom_article}</b>
      </td>
      <td class="px-6 py-4">
      <b className="text-black">{item.qnt}</b>
      {/* <input type="text" value={item.unite==null ? 'Unité': item.unite} />{item.unite==null ? 'Unité': item.unite}  */}
      </td>

  </tr>

</tbody>
             
       
       )
       :<tr><td colSpan={2} className="text-center text-xm text-black bg-red-100 h-10" >Aucun produit trouvé ...! </td></tr>}

        </table></div>:''}
    </div>
}