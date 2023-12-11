import { Button, FormGroup, Stack, TextField, Typography,Input } from "@mui/material";
// import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faCheck,faCheckSquare,faBugSlash,faBug } from "@fortawesome/free-solid-svg-icons"
import { Add } from "@mui/icons-material";

export default function ModifierProductEnTable(props){

    const [checkIfDisabled,setcheckIfDisabled]=useState(false)
    const [quantite_initial,setQuantiter_initial]=useState(props.body.quantiter_initial);
    const [quantite_courent,setquantite_courent]=useState(props.body.quantite_courent);
    const [Observation,setObservation]=useState(props.body.Observation);
    const [message,setmessage]=useState();
    const [error,seterror]=useState();
  
    function Modifier(){
      setcheckIfDisabled(true)
      let body=JSON.stringify({
          quantite_initial:quantite_initial,
          quantite_courant:quantite_courent,
          observation:Observation,
          id_article:props.body.id_article,
          id_stock:props.body.id_stock,
          article_en_stock:props.body.article_en_stock
            }) 
            try {
              const newLocal = "/Update_articles_en_stocl/"+body;
              let res=axios.put(newLocal);
              seterror('')               
                  const timeoutId2= setTimeout(() => {
                    setmessage('Operation Validé');
                   
                }, 1);
                const clear = setTimeout(() => {
                  return () => clearTimeout(timeoutId2),setmessage(''), props.close(true);;     
             }, 1000);
                   }
                   catch (err) {
              console.log(err);
              setmessage('')
              const timeoutId2= setTimeout(() => {
                  seterror('Anvalid Champ')
              }, 1);
            }
                   
  }

  
    return(
        <>
          {message? 
    <div id="session" class="alert alert-success alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',width:'400px',top: 0,right: 0}}>
    <i><FontAwesomeIcon icon={faCheck}/>&ensp; 
    {message}</i> 
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button> */}
    </div>:''}


    {error? 
          <div id="session" class="alert alert-danger alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',top: 0,width:'400px',right: 0}}>
    <i> <FontAwesomeIcon icon={faBug}/>&ensp; 
    {error}</i> 
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button> */}
    </div>:''}
    <h4 className="mb-4"><i>Nom d'article</i> :<b> {props.body.nom_article}</b></h4>
            <Typography className="text-center"></Typography>
                <Stack spacing={3} direction="row" className="mt-1">
                <FormGroup>
                    {/* <Input placeholder="Quantité initiale" variant="solid" type="number"/> */}
                    <TextField disabled={checkIfDisabled} variant="standard" type="number" label="Quantité initiale" value={quantite_initial}
                     onChange={(e)=>{setQuantiter_initial(e.target.value)}} 
                     required>
                        </TextField>
                    </FormGroup>
                    <FormGroup>
                        {/* <Input placeholder="Nom aticle" variant="solid" type="text"/> */}
                        <TextField disabled={checkIfDisabled} variant="standard" type="text" label="Quantite Courant" value={quantite_courent}
                         onChange={(e)=>{setquantite_courent(e.target.value)}}
                          className='w-400'>
                        </TextField>
                    </FormGroup>
                    
                    <FormGroup>
                    <TextField disabled={checkIfDisabled} variant="standard" type="text" label="Observationté" value={Observation}
                     onChange={(e)=>{setObservation(e.target.value)}} required>
                        </TextField>
                    </FormGroup>
                    <FormGroup>
                     
                        <Button variant={'contained'} color={'error'} disabled={checkIfDisabled} className="float-left "
                          onClick={Modifier}  
                        >Modifier</Button>
                    </FormGroup>
                  
                </Stack>
               
        </>
      
    )
}