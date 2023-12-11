import { Button, FormGroup, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { completeStockCreation } from "../../../../redux/actions";
import { useState } from "react";
// import { json } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faCheck,faCheckSquare,faBugSlash,faBug } from "@fortawesome/free-solid-svg-icons"
let date=  new Date().toISOString().slice(0,10);

export  function NouveauStock(props){
    const dispatch = useDispatch();
    const [message,setmessage]=useState();
   const [error,seterror]=useState();
    const [checkIfDisabled,setcheckIfDisabled]=useState(false)
    
    function dispatchStockCreationCompleted(){

        let body=JSON.stringify({

            date_stock:dateStock,
            nombre_article:nombreArticles,
            montant_totale:montantStock
        })
        
    try {
        const newLocal = "/ajout_stock/"+body;
        axios.post(newLocal).then((res)=>{setmessage_(res.data)})
        .catch(function(error){
           
            setcheckIfDisabled(false)
            console.log(error)
            setmessage('')
        const timeoutId = setTimeout(() => {
              seterror('Anvalid Champ')
        }, 1);
        const clear = setTimeout(() => {
          return () => clearTimeout(timeoutId),seterror('');
          
        }, 2000);
        });
         
       function setmessage_(res){
        seterror('')
        dispatch(completeStockCreation());
        setcheckIfDisabled(true)
        const timeoutId = setTimeout(() => {
         
          setmessage(res);
      }, 1);

        const clear = setTimeout(() => {
          return () => clearTimeout(timeoutId),setmessage(''),seterror('');
          
        }, 2000);
    }
    
    }

       catch (err) {
        console.log(err);
        setmessage('')
        const timeoutId = setTimeout(() => {
              seterror('Anvalid Champ')
        }, 1);
        const clear = setTimeout(() => {
          return () => clearTimeout(timeoutId),seterror('');
          
        }, 2000);
        
      }

  
       
        // dispatch({
        //     type:NEW_STOCK_CREATION_COMPLETED,
        //     payload:{isStockCreationCompleted:true,
        //     applyStyleWhenStockCreationCompleted:{".Mui-completed":{color:"green"},
        //     ".MuiStepLabel-label":{color:"black"}}}
        // });
        
    
        //dispatch(goNextStepStockAndProductsCreation());
        // dispatch({
        //     type:GO_NEXT_STEP_STOCK_AND_PRODUCTS_CREATION,
        //     payload:{activeStep:1}
        // })
    }
    // function testDispatch(){
    //     dispatch({type:"GO_NEXT_STEP_STOCK_AND_PRODUCTS_CREATION"});
    // }
    const [dateStock,setDateStock]=useState(date);
    const [montantStock,setmontantStock]=useState(0);
    const [nombreArticles,setnombreArticles]=useState(null);
    return(
        
        <>



{message? 
    <div id="session" class="alert alert-success alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',width:'400px',top: 0,right: 0}}>
    <i><FontAwesomeIcon icon={faCheck}/>&ensp; 
    {message}</i> 
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button> */}
    </div>
    :''}


    {error? 
          <div id="session" class="alert alert-danger alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',top: 0,width:'400px',right: 0}}>
    <i> <FontAwesomeIcon icon={faBug}/>&ensp; 
    {error}</i> 
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button> */}
    </div>
    :''}

      
            {/* <form action="" > */}
            {/* onSubmit={(e)=>alert(e.target[1].value)} */}
                <Stack spacing={2} direction="row" className="flex items-stretch">
                  
                    <FormGroup>
                        <TextField required 
                        InputLabelProps={{
                            shrink: true,
                          }}
                        variant="standard" type="date" label="Date du stock" defaultValue={date}
                        onChange={(e)=>{setDateStock(e.target.value)}}
                        disabled={checkIfDisabled}
                        >

                        </TextField>
                        {/* <Input type="date"/> */}
                    </FormGroup>

                    <FormGroup>
                        <TextField variant="standard" type="number" label="Montant en DH"
                        required
                        onChange={(e)=>{setmontantStock(e.target.value)}}
                        disabled={checkIfDisabled}>

                        </TextField>
                    </FormGroup>

                    <FormGroup>
                        <TextField variant="standard" type="number" label="Nombre d'articles"
                        onChange={(e)=>{setnombreArticles(e.target.value)}}
                        required
                        disabled={checkIfDisabled}>

                        </TextField>
                    </FormGroup>
                   
                    <FormGroup className="justify-self-end">
                        {/* <Button color="success" variant="outlined" className="w-full h-full"
                        onClick={props.ajouterStockAuCache}>
                            Suivant
                        </Button> */}
                        <Button variant="outlined" color="success" className="min-h-full "
                            onClick={()=>dispatchStockCreationCompleted()}
                        >Ajouter Stock</Button>
                        {/* <Button variant="outlined" color="success" className="min-h-full"
                            onClick={testDispatch}
                        >Test dispatch</Button> */}
                    </FormGroup>
                  
                </Stack>
                {/* </form> */}
        </>
    )
}