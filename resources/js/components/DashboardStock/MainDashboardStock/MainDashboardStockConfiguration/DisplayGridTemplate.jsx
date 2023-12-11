import { Group} from "@mui/icons-material";
import { Grid,Fab ,Button,Typography} from "@mui/material";
export default function DisplayGridTemplate(props){
    return(
        <Grid container className="pr-6 pl-6 " >
                    <Grid item xs={12}>
                    <Button color="success">
                        <Fab variant="circular" color="success" size="small" 
                        className="m-2">
                            {props.startIcon}
                            
                        </Fab>
                        
                            {props.fabHeader}
                            </Button>
                        <hr />
                    </Grid>
                    
                    <Grid item xs={8}>
                        
                        <div className="">
                            {props.databaseContent}
                        </div>
                    </Grid>
                    <Grid item xs={4} className="p-4 mt-2 border-l-2 border-gray-300">
                        {/* <Typography variant="h6" className="text-center">Ajouter un nouveau Fonctionnaire</Typography>
                        <hr /> */}
                        <div className="p-6">
                            {props.newEmployee}
                        </div>
                    </Grid>
        </Grid>
    )
}