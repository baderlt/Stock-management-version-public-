//import { DataGrid } from "@mui/x-data-grid"
import { Delete, Edit } from "@mui/icons-material";
import {CircularProgress,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,BottomNavigationAction, Skeleton, Typography, Button, Snackbar, Alert} from "@mui/material";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch, useSelector } from "react-redux";
// const columns=[{field:"id_employee",headerName:"ID",width:150},
// {field:"nom_employee",headerName:"Nom Type article",width:90}];



export default function TableArticle(props){
    const [refreshTable,setRefreshTable]=useState("")
    const [message,setmessage]=useState();
    const [error,seterror]=useState();
    const [war,setwar]=useState();
    const submit = (article) => {
      confirmAlert({
        title:'Confirmer la suprission',
        message: "Vous Voulez Vraiment supprimer l'article '"+article.nom+"' ?",
        buttons: [
          {
            label: 'Confirmer',
            onClick: () => suprimer(article)
          },
          {
            label: 'Annuler',
            onClick: () =>  annuler()
        }
          
        ]
      })
    }
    
    function suprimer(article){
      axios.delete('/supprimerArticle', {
          id_article:article.id}).then((res)=>setmessage_(res.data))
          .catch(
            function(error){
          
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
            // console.log(res.data)
              const timeoutId1= setTimeout(() => {
                setmessage('Article Supprimé');
              }, 1);
          }
        
          myDispatch({type:"FORCER_UN_REFRESH"});
       
          props.refresh(true);
      }
        /////////////// annuler comfirmation
     function annuler(){
      // timeoutId2= setTimeout(() => {
        setmessage('')
        seterror('')
        setwar("Confirmer l'opération..!");
      // }, 300)
      };

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
    return(
        <TableContainer >
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

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="" sx={{backgroundColor:"rgb(245,245,230)"}}>
          <TableRow>
          <TableCell>
              ID
              </TableCell>
            <TableCell>
              Nom du type d'article
              </TableCell>
              <TableCell>
              Unité
              </TableCell>
            <TableCell >
             Action
            </TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows? props.rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row" >
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row" >
                {row.nom_article}
              </TableCell>
              <TableCell component="th" scope="row" >
                {row.unite ?row.unite:'Unité'}
              </TableCell>
              <TableCell >
              {/* <BottomNavigationAction  showLabel label="Modifier" icon={<Edit color="warning"/>} 
              /> */}
              <BottomNavigationAction  showLabel label="Supprimer" icon={<Delete color="error"/>}
              onClick={()=>{
                submit({'id':row.id,'nom':row.nom_article})
                // axios.post('/supprimerArticle', {
                //     id_article:row.id_article}).then(()=>console.log(row.id_article," Bien suprimée"));
                //     //setRefreshTable(refresh);
                //     props.refresh(true);
                    
              }} />
              </TableCell>
             
            </TableRow>
          )):<div><Skeleton variant="rectangular"width={650} height={70} />

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="text"width={650} height={70} />
          <Skeleton variant="rectangular" width={650} height={70} />
          <Skeleton variant="text" width={650} height={70} /></div>}
        </TableBody>
      </Table>
    </TableContainer>
      
    )
}


//<DataGrid
        // rows={props.rows}
        // columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}