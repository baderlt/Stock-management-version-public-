//import { DataGrid } from "@mui/x-data-grid"
import { Delete, Edit } from "@mui/icons-material";
import {CircularProgress,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,BottomNavigationAction, Snackbar, Alert} from "@mui/material";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch, useSelector } from "react-redux";
const columns=[{field:"id_employee",headerName:"ID",width:150},
{field:"nom_employee",headerName:"Nom Fonctionnaire",width:90}];



export default function TableEmployeeTemplate(props){
    const [refreshTable,setRefreshTable]=useState("")
    const refresh=useSelector((state)=>state.refreshFonctionnaires);
    const [message,setmessage]=useState();
    const [error,seterror]=useState();
    const [war,setwar]=useState();
    
    const myDispatch=useDispatch();

    const submit = (employee) => {
      confirmAlert({
        title:'Confirmer la suprission',
        message: "Vous Voulez Vraiment supprimer l'employee '"+employee.nom+"' ?",
        buttons: [
          {
            label: 'Confirmer',
            onClick: () => suprimer(employee)
          },
          {
            label: 'Annuler',
            onClick: () =>  annuler()
        }
          
        ]
      })
    }

  function suprimer(employee){
    axios.post('/supprimerEmployee', {
        id_employee:employee.id}).then((res)=>setmessage_(res.data))
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
              setmessage('Employée Supprimé');
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

            {refreshTable}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead  sx={{backgroundColor:"rgb(245,245,230)"}}>
          <TableRow>
            <TableCell>Nom Fonctionnaire</TableCell>
            <TableCell >Action</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows? props.rows.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row" >
                {row.nom_employee}
              </TableCell>
              <TableCell >
              {/* <BottomNavigationAction  showLabel label="Modifier" icon={<Edit color="warning"/>} 
              /> */}
              <BottomNavigationAction  showLabel label="Supprimer" icon={<Delete color="error"/>}
              onClick={
                ()=>{
                  submit({'id':row.id_employee,'nom':row.nom_employee})
                // axios.post('/supprimerEmployee', {
                //     id_employee:row.id_employee}).then(()=>console.log(row.id_employee," Bien suprimée"));
                //     myDispatch({type:"FORCER_UN_REFRESH"});
                //     //setRefreshTable(refresh);
                //     props.refresh(true);
                    
              }
              } />
              </TableCell>
              {/* <TableCell align="right">fat</TableCell>
              <TableCell align="right">carbs</TableCell>
              <TableCell align="right">protein</TableCell> */}
            </TableRow>
          )):<CircularProgress color="primary" />}
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