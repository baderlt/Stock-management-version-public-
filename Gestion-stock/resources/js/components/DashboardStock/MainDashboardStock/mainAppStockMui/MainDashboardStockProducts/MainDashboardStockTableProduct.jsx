import { useState } from "react";
import axios from "axios";
import React from "react";
import { Alert, Box, Button, FormGroup, Modal, Snackbar, Stack, TextField} from "@mui/material";
import { useEffect } from "react";
import NewProductEnTable from "./NewProductEnTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEdit,faTrashCan,faSearch} from '@fortawesome/free-solid-svg-icons'
import { Typography } from "@mui/material";
// import { Button } from "bootstrap";
import { Add } from "@mui/icons-material";
import ModifierProductEnTable from "./ModifierProductEnTable";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
export default function MainDashboardStockTableProduct(props){
    const [data,setdata]=useState();
    const [articles,setArticles]=useState();
    const [is_load,setis_load]=useState(false);
    const [message,setmessage]=useState();
    const [error,seterror]=useState();
    const [war,setwar]=useState();
    const [refrech,setrefrech]=useState(false);
    const [type_modal,settypemodale]=useState();
    const [open, setOpen] = React.useState(false);
    const handleOpen = (type) => {settypemodale(type), setOpen(true)};
    const handleClose = () => setOpen(false);
    


    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      
    };
    
////////////////// Pour le input de recherch d'article (filter articles avec le nom_article)    
    function onChange(e){
        let input_Value=e.target.value.toLowerCase();
        let filterData = data[0].filter((item) => {
            return item.nom_article.toLowerCase().indexOf(input_Value) !== -1
  })
  setArticles([filterData])
}

/////////////// pour Suprimer une Article
function Suprimer(liste){
  // let com= confirm("Vous Voulez Vraiment supprimer l'article "+liste[1]+"?");    
  let body=JSON.stringify({
    id_articles_en_stock:liste[0]
  })
    const newLocal ="/Suprimer_article_en_stock/"+body;
    axios.delete(newLocal).then((res)=>{setmessage_(res.data),setrefrech(!refrech);})
    .catch(
      function(error){
    
        console.log(error);
        setmessage('')
        setwar('');
        const timeoutId2= setTimeout(() => {
            seterror('ERROR')
        }, 1);
      }
       )
    function setmessage_(res){
      seterror('')
      setwar('')
   
        const timeoutId1= setTimeout(() => {
          setmessage('Article Supprimé');
        }, 1);
    }
  

}

/////////////// annuler comfirmation
function annuler(){
// timeoutId2= setTimeout(() => {
  // setmessage('')
  // seterror('')
  // setwar("Confirmer l'opération !");
// }, 300)
}


const submit = (liste) => {
  confirmAlert({
    title:'Confirmer la suprission',
    message: "Vous Voulez Vraiment supprimer l'article '"+liste[1]+"' ?",
    buttons: [
      {
        label: 'Confirmer',
        onClick: () => Suprimer(liste)
      },
      {
        label: 'Annuler',
        onClick: () =>  annuler()
    }
      
    ]
  })
}



/////////////////// Pour le passe data en composant ModifierarticleEnTable
const [body_modification,setBody_modification]=useState();
  function validation(liste){
    let body2={quantiter_initial:liste[3],quantite_courent:liste[2],Observation:liste[4],id_article:liste[1], id_stock:liste[0], article_en_stock:liste[5],nom_article:liste[6]}
    setBody_modification(body2);
    return body2;
  }
////////////////////////// useEfect get articel en stock id = props.ID

    useEffect(()=>{
      axios.get('/stock_en_article/'+props.ID)
        .then((respons)=>{setdata([respons.data]);setArticles([respons.data]);setis_load(true)})
    },[props.ID,refrech])

//////////////////////// pour ferm modal Ajout article
function close(e){
  setrefrech(!refrech);
  handleClose();
}
///////////////// pour ferm Alert
const vertical="top";
const horizontal="right"
const handleClosee= (event, reason) => {
    if (reason ==='clickaway') {
      return;
    }

    setmessage(false);
    seterror(false);
    setwar(false);
  }

    return (
        <div>
        <Snackbar anchorOrigin={{vertical,horizontal}} open={message} autoHideDuration={5000} onClose={handleClosee}>
        <Alert onClose={handleClosee} severity="success" sx={{ width: '120%' }}
        variant="filled">
  {message}
        </Alert>

      </Snackbar>

      <Snackbar anchorOrigin={{vertical,horizontal}} open={error} autoHideDuration={5000} onClose={handleClosee}>
        <Alert onClose={handleClosee} severity="error" sx={{ width: '120%' }}
        variant="filled">
       {error}
        </Alert>
        </Snackbar>
        <Snackbar anchorOrigin={{vertical,horizontal}} open={war} autoHideDuration={3000} onClose={handleClosee}>
        <Alert onClose={handleClosee} severity="warning" sx={{ width: '120%' }}
        variant="filled">
       {war}
        </Alert>
        </Snackbar>
  
  <div className="flex justify-between   ">
{/*//////////////////////// modale de Ajouter articles  */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className=" bg-gradient-to-b from-purple-100 to-blue-100">
  <Typography id="modal-modal-title" variant="h6" component="h2" className="text-green-700">
     <Button size="large"  variant="outlined" color="success"  startIcon={type_modal=='ajout'?<Add/>:<FontAwesomeIcon icon={faEdit}/>}>
                    
                     {type_modal=='ajout'?'Ajouter':'Modifier'} Article en Stock
      </Button>
    </Typography>
    
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack spacing={5} direction="row" className="mt-8">
                    <FormGroup>
                      {type_modal=='ajout'?  <NewProductEnTable id_stock={props.ID} close={close}/>:''}
                      {type_modal=='modifier'? <ModifierProductEnTable body={body_modification} close={close}/>:''}
                     
                    </FormGroup>
    </Stack>
    </Typography>
  </Box>
</Modal>

       </div>
        <br/>
<div className="grid grid-cols-6 gap-4">        <div className="inline-flex mb-2 col-start-1 col-end-3 h-10 ">
<span class="inline-flex  items-center px-3  text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
<i className="pt-1"><FontAwesomeIcon icon={faSearch}/></i>
  </span>
<input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche Rapid ..." 
onChange={(e)=>{onChange(e)}}/>
</div>
                <span className=" mr-2 flex-1 mb-2 col-end-9 col-span-2 h-10">
                <Button size=""  variant="outlined" color="success" onClick={()=>handleOpen('ajout')}  startIcon={<Add/>}>
               
               <i>Ajouter Article</i></Button>
               </span>
</div>

              
                
        {
        is_load? <div>
            
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="text-xm w-full text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                  ID_stock
                </th>
              
                <th scope="col" class="px-6 py-3 border border-slate-600">
                   ID d'article
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                Nom d'article
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                Quantite initiale
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                Quantite Courant
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                Observation 
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                    Modifier
                </th>
                <th scope="col" class="px-6 py-3 border border-slate-600">
                    Suprimer
                </th>
            </tr>
        </thead>   
        <tbody>
       
        {articles ? articles[0].map((item)=>{ return <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        {/* <form  action='/gg' method="GET" > */}
     
                <th scope="row" class="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black border border-slate-900">
                {item.id_stock}
                </th>
                
                <td class="px-6 py-4 border border-slate-700">
                {item.id}
                {/* <input type="text" value={item.unite==null ? 'Unité': item.unite} />{item.unite==null ? 'Unité': item.unite}  */}
                </td>
                <td  class="px-6 py-4 border border-slate-900  whitespace-nowrap ">
                {item.nom_article}
                </td>
                <td class="px-6 py-4 border border-slate-700">
                  
               {/* <input type="text"  value={qnt} onChange={(e)=>{setqnt(e.target.value)}}/>  */}
              <b> {item.quantite_initiale_article==null? 0:item.quantite_initiale_article}</b>
                </td>
                <td class="px-6 py-4 border border-slate-700">
                    {/* {setqnt(item.quantite_courant_article)} */}
                {/* <input type="text" value={item.created_at.split('T')[0]} /> */}
              <b>  {item.quantite_courant_article==null? 0:item.quantite_courant_article}</b>
                </td>
                <td class="px-6 py-4 border border-slate-700">
                    {/* {setqnt(item.quantite_courant_article)} */}
                {/* <input type="text" value={item.created_at.split('T')[0]} /> */}
                {item.observation}
                
                </td>
                <td class="px-6 py-4 border border-slate-700">
                
                   <button  >
                    <i className="text-xl flex gap-x-4 items-center  py-2 text-green-500 hover:text-indigo-600 " onClick={()=>{validation([item.id_stock,item.id,item.quantite_courant_article,item.quantite_initiale_article,item.observation,item.art_stock,item.nom_article]),handleOpen('modifier')}}><FontAwesomeIcon icon={faEdit}/> &ensp; </i> </button> 
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> &ensp; &ensp;<FontAwesomeIcon icon={faTrashCan}/></a> */}
                </td>
                <td class="px-6 py-4 border border-black-700">
                
                <button  >
                 <i className="text-xl flex gap-x-4 items-center  py-2 text-red-500 hover:text-indigo-600 " onClick={()=>submit([item.art_stock,item.nom_article])}><FontAwesomeIcon icon={faTrashCan}/> &ensp; </i> </button> 
                 {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> &ensp; &ensp;<FontAwesomeIcon icon={faTrashCan}/></a> */}
             </td>
    
           </tr>
   
        //    </form>
    
    }):''}
        </tbody>
    </table>
</div>

        </div> 
        :''
    }
        </div>
    )
}

// import React from 'react';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

// class App extends React.Component {

//   submit = () => {
//     confirmAlert({
//       title: 'Confirm to submit',                        // Title dialog
//       message: 'Are you sure to do this.',               // Message dialog
//       childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component
//       confirmLabel: 'Confirm',                           // Text button confirm
//       cancelLabel: 'Cancel',                             // Text button cancel
//       onConfirm: () => alert('Action after Confirm'),    // Action after Confirm
//       onCancel: () => alert('Action after Cancel'),      // Action after Cancel
//       overlayClassName: "overlay-custom-class-name"      // Custom overlay class name
//     })
//   };

//   render() {
//     return (
//       <div className="container">
//         <button onClick={this.submit}>Confirm dialog</button>
//       </div>
//     );
//   }
// }
