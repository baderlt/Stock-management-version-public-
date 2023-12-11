import { Button, Grid, Typography } from "@mui/material";

export default function MainDashboardStockProductsInfoButton(props){

    return(
        <Grid container >
            <Grid item xs={4}>
            <Button  startIcon={props.startIcon} size="large" fontSize="large" color={props.color} >
            </Button>
            </Grid>
            <Grid item xs={8}>
                <div>
                    <Typography color={props.color} variant="h7"> {props.name}</Typography>
                </div>
                <hr />
                <div>
                <Typography color={props.color}  variant="h5"> {props.number}</Typography>
                </div>
            </Grid>
        </Grid>
    )
}