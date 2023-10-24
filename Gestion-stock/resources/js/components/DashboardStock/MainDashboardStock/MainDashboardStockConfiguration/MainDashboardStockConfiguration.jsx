import { ManageAccounts, Store } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
export default function MainDashboardStockConfiguration(props){
    const dispatch=useDispatch();
    const configurationContent=useSelector((state)=>state.stepperCompletionReducer.configurationContent)
    return(
    <>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs  >
                <Tab label={<Button variant="contained" color="secondary" startIcon={<ManageAccounts/>}
                onClick={()=>dispatch({type:"AFFICHIER_GESTION_FONCTIONNAIRES"})}> <Typography >  Gérer les fonctionnaires</Typography></Button>} />
                <Tab label={<Button variant="contained" color="secondary" startIcon={<Store/>}
                onClick={()=>dispatch({type:"AFFICHIER_GESTION_ARTICLES"})}><Typography > Gérer les articles</Typography></Button>} />
                
            </Tabs>
        </Box>
        {configurationContent}
    </>
    )
}