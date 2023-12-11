import { Person, PersonAdd } from "@mui/icons-material";
import {TextField,Input, IconButton,Card,CardContent,Typography,CardActions,Button,CardHeader, Snackbar, Alert} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function AjouterNouveauEmployee(props){
    const [nomEmployee,setNomEmployee]=useState("");
    const [feedBack,setFeedBack]=useState("")
    const [error,setError]=useState("")
    const [openError,setOpenError]=useState(false)
    //snackBar
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
        setOpenError(false)
      }

    function showConfirmation(){
        setFeedBack("ok");
        //alert(feedBack);
        setOpen(true)
    }
    function showError(error){
        setError(error)
        setOpenError(true)
    }


    //const refresh=useSelector((state)=>state.refreshFonctionnaires);
    const dispatch=useDispatch();
    function ajouterEmployee(){
        axios.post('/ajouterEmployee', {
            nomEmployee:nomEmployee
          }).then(()=>showConfirmation()).catch((error)=>showError(error));
        //   {props.update?true:false}
        dispatch({type:"FORCER_UN_REFRESH"})
        props.valider(true)
    }
    const vertical="top";
    const horizontal="right"
    return(
        <Card className="max-w-fit" sx={{backgroundColor:"beige"}}>
            <Snackbar anchorOrigin={{vertical,horizontal}} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '120%' }}
        variant="filled">
          Employée bien ajouté
        </Alert>

      </Snackbar>
      <Snackbar anchorOrigin={{vertical,horizontal}} open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '120%' }}
        variant="filled">
          Employée non ajouté
        </Alert>

      </Snackbar>
            <CardHeader  title="Ajouter un nouveau fonctionnaire" avatar={
                <IconButton size="large"  className="">
                    <PersonAdd size="large" className=""/>
                    
                </IconButton>}
                />
            
            <CardContent>
                <TextField label="Nom fonctionnaire" variant="filled" autoComplete="employee" onChange={(e)=>setNomEmployee(e.target.value)}/>
            </CardContent>
           
            <CardActions>
                <Button color="success" variant="contained" onClick={()=>ajouterEmployee()}>Ajouter</Button>
            </CardActions>
        </Card>
    )
}