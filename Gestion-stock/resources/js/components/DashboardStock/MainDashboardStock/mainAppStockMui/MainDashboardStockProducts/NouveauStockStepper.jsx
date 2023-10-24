import { Grid, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { Button } from "bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function NouveauStockStepper(props){
    //const dispatch=useDispatch();
    const isStockCreationCompleted=useSelector((state)=>state.stepperCompletionReducer.isStockCreated)
    const applyStyleWhenStockCreationCompleted=useSelector((state)=>state.stepperCompletionReducer.applyStyleWhenStockCreationCompleted)

    const [listNouveauArticles,setLitsNouveauArticles]=useState(null)

    const areProductsAddedCompleted=useSelector((state)=>state.stepperCompletionReducer.areProductsAdded)
    const applyStyleWhenProductsAddedCompleted=useSelector((state)=>state.stepperCompletionReducer.applyStyleWhenProductsAddedCompleted)
    const [activeStep,setActiveStep]=useState(0);
    const activeStepNewStockAndProducts=useSelector((state)=>state.stepperCompletionReducer.activeStepNewStockAndProducts)

    const expandAjoutArticles=useSelector((state)=>state.stepperCompletionReducer.expandAjoutArticles);

    const nouveauArticlePlaceholder=useSelector((state)=>state.stepperCompletionReducer.articlesEnCache)

    return(
        <Grid container>
            {/* {props.isFirstCompleted?()=>{
                setIsFirstCompleted(true);
                console.log(isFirstCompleted)
                setapplyStyleToFirst({".Mui-completed":{color:"green"},".MuiStepLabel-label":{color:"black"}})
            }:""} */}

            <Grid item xs={12}>
                <Stepper activeStep={activeStepNewStockAndProducts} className=" min-with-fit" 
                
                orientation="vertical">
                    
                    <Step  expanded={true} className="" 
                    completed={isStockCreationCompleted} sx={applyStyleWhenStockCreationCompleted}>
                     
                        <StepLabel >
                            {props.firstLabel}
                            
                        </StepLabel>
                        <StepContent>
                            {props.firstContent}
                        </StepContent>
                    </Step>
                  <Step  expanded={expandAjoutArticles} completed={areProductsAddedCompleted}
                  sx={applyStyleWhenProductsAddedCompleted}
                    >
                        <StepLabel>
                            {props.secondLabel}
                        </StepLabel>
                        <StepContent >
                           
                          {/* {props.secondContent}  */}
                            {/* <EmployeeRadioInput nomEmployee="Haloui"/>  */}
                            {nouveauArticlePlaceholder.map((item)=>item)}
                         
                        </StepContent>
                    </Step>
                    <Step
            
                    >
       
                        <StepLabel>
                           {props.thirdLabel}
                        </StepLabel>
                        <StepContent>
                           {props.thirdContent}
                        </StepContent>
                    </Step> 
                    
                </Stepper>
            </Grid>
        
            <Grid item xs={4} className="">
              
            </Grid>

            
                <Grid item xs={4} className="">
                   
                </Grid>

            
            <Grid item xs={4} className="">
          
       
            </Grid> 
            {/* <Button variant="outlined" color="success">Valider</Button> */}
         </Grid>
    )
}