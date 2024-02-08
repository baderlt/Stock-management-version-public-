import { AddBusiness, Person, PersonAdd, ProductionQuantityLimits } from "@mui/icons-material";
import {TextField,Input, IconButton,Card,CardContent,Typography,CardActions,Button,CardHeader, Snackbar, Alert} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function AjouterNouveauArticle(props){
    const [nomArticle,setnomArticle]=useState("");
    const [uniteArticle,setUniteArticle]=useState("Unité");

    const [feedBack,setFeedBack]=useState("")
    const [error,setError]=useState("")
    const [open, setOpen] = useState(false);
    const [openError,setOpenError]=useState(false)
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
    function ajouterArticle(){
        axios.post('/ajouterArticle', {
            nom_article:nomArticle,
            unite_article:uniteArticle
          }).then(()=>showConfirmation()).catch((error)=>showError(error));
        //   {props.update?true:false}
        // dispatch({type:"FORCER_UN_REFRESH"})
        props.valider(true)
    }
    const vertical="top";
    const horizontal="right"
    return(
        <Card className="max-w-fit" sx={{backgroundColor:"beige"}}>
             <Snackbar anchorOrigin={{vertical,horizontal}} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '120%' }}
        variant="filled">
          Article bien ajouté
        </Alert>

      </Snackbar>
      <Snackbar anchorOrigin={{vertical,horizontal}} open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '120%' }}
        variant="filled">
          Article non ajouté
        </Alert>

      </Snackbar>
            <CardHeader  title="Ajouter un nouveau type d'article" avatar={
                <IconButton size="large"  className="">
                    <AddBusiness size="large" className=""/>
                    
                </IconButton>}
                />
            
            <CardContent>
                <TextField label="Nom Article" variant="filled" autoComplete="article" onChange={(e)=>setnomArticle(e.target.value)}/>
                <TextField label="Unité Article" variant="filled" autoComplete="article" onChange={(e)=>setUniteArticle(e.target.value)}
                 value={uniteArticle} />
            
            </CardContent>
           
            <CardActions>
                <Button color="success" variant="contained" onClick={()=>ajouterArticle()}>Ajouter</Button>
            </CardActions>
        </Card>
    )
}