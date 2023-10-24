import { Alert, Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Input, Paper, Radio, RadioGroup, Snackbar, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper, TextField, Typography, Zoom } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faCheck,faCheckSquare,faBugSlash,faBug } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";
import { set } from "lodash";
import MainDashboardStockProductsInfoButton from "../mainAppStockMui/MainDashboardStockProducts/MainDashboardStockProductsInfoButton";
import { ShoppingCart } from "@mui/icons-material";
// import EmployeeRadioInput from "./employeeRadioInput";

export default function MainDashboardStockRetraitStepper(props){

    ////// pour result de filter data
    const [Articles,setArticles]=useState();
    ////// pour data from base donnée
    const [data,setData]=useState();
    ////// pour éviter erreur de map  sans data
    const [is_load,setis_load]=useState(false);
     
   const [message,setmessage]=useState();
   const [error,seterror]=useState();

     const [value_for_input,setvalue_for_input]=useState({id:0,name:"Nom d'article",quantite:0});

     const [radio_checked,setRadio_checked]=useState();
    const [employees,setemployees]=useState();
    const [completed,setCompleted]=useState(false);
    const [activeStep,setActiveStep]=useState(0);
    const [applyStyleEmployee,setapplyStyleEmployee]=useState("");
    const [applyStyleFin,setapplyStyleFin]=useState("");
    const [applyStyleArticle,setapplyStyleArticle]=useState("");
    const [refrech,setrefrech]=useState(false);


    useEffect(()=>{
        axios.get('/article_data')
        .then((respons)=>{setData([respons.data]);})

        axios.get('/get_employe')
        .then((res)=>{setemployees([res.data])});
        

    },[])



    //// function pour filter data 
    function onChange(e){
                let input_Value=e.target.value.toLowerCase();
                console.log(data)
                console.log(input_Value)
                let filterData = data[0].filter((item) => {
                    return item.nom_article.toLowerCase().indexOf(input_Value) !== -1
          })


          setis_load(true)
          console.log(filterData);
          setArticles(filterData)
    }


    function print_info(e){
        // console.log(e.target.getAttribute('a-key'))
        axios.get('/quantite_en_stock/'+e.target.getAttribute('a-key')).then((res)=>{setvalue_for_input({id:e.target.getAttribute('a-key'),name:e.target.value,quantite:res.data});});
        // setvalue_for_input({id:e.target.getAttribute('a-key'),name:e.target.value,quantite:res.data});
        setArticles('')
        setnom_A(e.target.value)
        // console.loge(res.data)
    }




 let validation_data= async (e) => {
    e.preventDefault();
  if (radio_checked){
    let body=JSON.stringify(
        {id_employee:radio_checked,
        quantite_prise:quantite_prise,
        id_article:value_for_input.id,
    });

   
    try {
      const newLocal = "/Retrait_pour_emoloyee/"+body;
      let res = await axios.post(newLocal);
        seterror('')
        const timeoutId = setTimeout(() => {
        //   setmessage(res.data);
          console.log(res.data[0].result);
          if(res.data=='Quantite introvable dans le Stock'){
            seterror('Quantite introvable dans le Stock');
          }else{
            setmessage('Operation Validé');
            setvalue_for_input({...value_for_input,quantite:value_for_input.quantite- quantite_prise});
            
          }
        }, 1);
        // const clear = setTimeout(() => {
        //   return () => clearTimeout(timeoutId),setmessage(''),seterror('');
        // //   setrefrech(!refrech);
        // }, 2000);
           }

     catch (err) {
      console.log(err);
      setmessage('')
      const timeoutId = setTimeout(() => {
        if(err.response.data.message=="Call to a member function get() on null"){
        seterror('Article Epuisé en Stock')}
        else{
            seterror('Anvalid Champ')
        }

      }, 1);
    //   const clear = setTimeout(() => {
    //     return () => clearTimeout(timeoutId),seterror('');
        
    //   }, 2000);
      
    }}else{
        const timeoutId = setTimeout(() => {
        seterror('Anvalid Champ')
        },1);
    }
  };

    const etapeSuivante=()=>{
        if(activeStep<3){
            setActiveStep((etapeCourrante)=>etapeCourrante+1)
        }
    }
    const etapePrecedente=()=>{
        if(activeStep>0)
            setActiveStep((etapeCourrante)=>etapeCourrante-1)
    }
    
    const completeEmployee=(props)=>{
        setCompleted((old)=>true)
        setapplyStyleEmployee({".Mui-completed":{color:"green"},".MuiStepLabel-label":{color:"black"}})
        // setapplyStyleEmployee({ root: {
        //     "& .MuiStepIcon-active": { color: "red" },
        //     "& .MuiStepIcon-completed": { color: "green" },
        //     "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
        //   }})
    }       
    const testStyleArticle=()=>{
        setapplyStyleArticle({".Mui-completed":{color:"green"},".MuiStepLabel-label":{color:"black"}})
    }


    const [nom_A,setnom_A]=useState();
    const [quantite_prise,Setquantite_prise]=useState();
    const myArticles=[""];
    const vertical="top";
    const horizontal="right"
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setmessage(false);
        seterror(false)
      }
    return(   <div><div className="px-10 border-b   to-blue-100 border-gray-200">
    <h1 class="text-2xl font-semibold leading-relaxed text-gray-800"><b>Retrait</b></h1>
    <p class="text-sm font-medium text-green-600">
        Faire un retrait pour un fonctionnaire
    </p><br></br>
</div>
<br></br>

        <form onSubmit={(e)=>{validation_data(e)}}>
            
        <Snackbar anchorOrigin={{vertical,horizontal}} open={error} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '120%' }}
        variant="filled">
       {error}
        </Alert>

      </Snackbar>
             <Snackbar anchorOrigin={{vertical,horizontal}} open={message} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '120%' }}
        variant="filled">
  {message}
        </Alert>

      </Snackbar>
            
             {/* {message? 
    <div id="session" class="alert alert-success alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',width:'400px',top: 0,right: 0}}>
    <i><FontAwesomeIcon icon={faCheck}/>&ensp; 
    {message}</i> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button></div>:''} */}

{/* 
    {error? 
          <div id="session" class="alert alert-danger alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',top: 0,width:'400px',right: 0}}>
    <i> <FontAwesomeIcon icon={faBug}/>&ensp; 
    {error}</i> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button></div>:''} */}
        
        <Grid container>
            <Grid item xs={12}>
                
                <Stepper activeStep={activeStep} className="flex items-start"  >
                {/* className="relative" */}
                    <Step  expanded={true} sx={applyStyleArticle} onClick={()=>testStyleArticle()} 
                    className="basis-1/3 self-start">
                    {/* className="absolute top-0 left-0"  */}
                        <StepLabel >

                            Choix d'article
                            
                        </StepLabel>
                        <StepContent>
                        <FormGroup>
                                <TextField variant="outlined" type="text" value={nom_A}
                                onChange={(e)=>{ setnom_A(e.target.value), onChange(e)  }}>

                                </TextField>
                                <div className="list-group">
          {Articles ? Articles.map((item) => {
            return (
              <input className="list-group-item list-group-item-action"
                a-key={item.id} onClick={(e)=>{print_info(e)}}
                value={item.nom_article}
              />
            )
          }):''}
        </div>
                            </FormGroup>
                        </StepContent>
                    </Step>
                    <Step expanded={true} completed={completed} className="basis-1/3 self-start" sx={applyStyleEmployee}
                    
                    >
                        <StepLabel sx={{color:"red"}}>
                            Nom d'employée
                        </StepLabel>
                        <StepContent >
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onClick={()=>completeEmployee()}
                               required >
{employees ?  employees[0].map((item)=>{return  <FormControlLabel  value={item.nom_employee} control={<Radio value={item.id_employee} name="employee" onChange={(e)=>{setRadio_checked(e.target.value)}}/>} label={item.nom_employee} />
}) 
 :<div className="text-red-500">Problem de server (try Again)</div>}
                                </RadioGroup>
        
                            </FormControl>
                           
                        </StepContent>
                    </Step>
                    <Step expanded={true} 
                   className="basis-1/3 self-start"
                     sx={{".Mui-completed":{color:"green"}}}
                    >
       {/* className="absolute top-0 right-0 min-h-full" */}
                        <StepLabel>
                           Quantité
                        </StepLabel>
                        <StepContent>
                           <Card >
                           {/* bg-gradient-to-tl from-purple-200 via-lime-100 to-purple-200 */}
                                    <CardContent>
                                        <Grid container className="min-w-fit">
                                            <Grid item xs={12}>
                                                <Typography variant="h5" color="success"
                                                className="text-green-600"
                                                
                                                >{value_for_input.name}</Typography>
                                                <input type="text"  value={value_for_input.id}  className='d-none'/>

                                                <hr />
                                            </Grid>
                                        <br />
                                            <Grid item xs={12}>
                                                <div className="flex">
                                                    {/* <div className=" text-x basis-1/2">
                                                    Quantité en stock:
                                                    </div>

                                                    <div className="text-xl border border-green bg-green-50 pl-6 basis-1/2 ">
                                                    {value_for_input.quantite}
                                                    </div> */}
                                                    <div className="w-60 mt-2 mb-2 bg-green-50 border-solid   border-2 border-green-600  rounded" >
                <MainDashboardStockProductsInfoButton startIcon={<ShoppingCart/>} name="Quantité en stock:" number={value_for_input.quantite}
            color="secondary"/>
            </div>
                                                </div>
                                                <br />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <div className="flex">
                                                    <div className="basis-1/2 text-xm">
                                                       <b> Je veux:</b>
                                                    </div>
                                                

                                                    <div className="basis-1/2">
                                                    {/* <TextField variant="outlined" type="text" 
                                                        onChange={(e)=>{
                                                        let articleName=e.target.value.toLowerCase();
                                                             }}>
                                                    </TextField> */}
                                                  
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                            <TextField variant="filled" type="number" name="quantite"  inputProps={{min:1}}
                                                        onChange={(e)=>{
                                                       Setquantite_prise(e.target.value);
                                                             }}>
                                                    </TextField> 
                                            </Grid>

                                            {/* <Grid item xs={6} className="min-w-fit">
                                                <Typography>
                                                    Quantité en stock:
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                6
                                            </Grid> */}
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined"  color="success" type="submit">
                                            Valider
                                        </Button>
                                    </CardActions>

                           </Card>
                        </StepContent>
                    </Step>
                    
                </Stepper>
            </Grid>
        
            <Grid item xs={4} className="">
              
            </Grid>

            
                <Grid item xs={4} className="">
                   
                </Grid>

            
            <Grid item xs={4} className="">
            {/* <Button variant="outlined" color="primary" onClick={()=>etapeSuivante()}>Suivant</Button>
            <Button variant="outlined" color="primary" onClick={()=>etapePrecedente()}>Précedent</Button>
        */}
            </Grid> 
            {/* <Button variant="outlined" color="success">Valider</Button> */}
         </Grid>
         </form>
         </div> 
    )
}