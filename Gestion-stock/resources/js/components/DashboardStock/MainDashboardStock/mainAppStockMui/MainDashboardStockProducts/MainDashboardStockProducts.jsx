import { FormControl, InputLabel, MenuItem, Select,Button,ButtonGroup, Typography, Autocomplete, Drawer } from "@mui/material";
import { ShoppingCart, MonetizationOn,ShoppingCartCheckoutSharp,Add} from "@mui/icons-material";
import MainDashboardStockProductsInfoButton from "./MainDashboardStockProductsInfoButton";
import axios from "axios";
import { useState,useEffect } from "react";
import MainDashboardStockTableProduct from "./MainDashboardStockTableProduct";
import NouveauStockStepper from "./NouveauStockStepper";
import { NouveauStock } from "./NouveauStock";
import NewProductComponent from "./NewProductComponent";
// import Drawer from "@mui/material";

export default function MainDashboardStockProducts(props){
   const [stock_years,setstock_years]=useState();
   const [years_is_load,setyear_is_load]=useState(false);
   const [stock_years_mounth,setstock_years_mounth]=useState();
   const [stock_years_mounth_day,setstock_years_mounth_day]=useState();
   const [mounth_is_load,setmounth_is_load]=useState(false);
   const [day_is_load,setday_is_load]=useState(false);
   const [year,setyear]=useState();
   const [month,setmonth]=useState();
   const [day,setday]=useState();
   const [info,setinfo]=useState();
   const [info_is_load,setinfo_is_load]=useState(false);
   const [article_epuise,setarticle_epuise]=useState(0);
   const [table_articles,settable_articles]=useState();
   /////////////////////////// UseEfect Get les année des stock
    useEffect( ()=>{
   axios.get('/get_stock_years')
   .then((res)=>{setstock_years(res.data),setyear_is_load(true)});
    },[])

    function GET_Mounth(event){
        let url="/get_stock_years_mounth/"+event.target.value;
        
        axios.get(url)
        .then((res)=>{setstock_years_mounth(res.data),setmounth_is_load(true)});
        //  console.log(stock_years_mounth);
            
    }
    function GET_Day(e){
        let url="/get_stock_years_mounth_day/"+e.target.value+"/"+year;
        axios.get(url)
        .then((res)=>{setstock_years_mounth_day(res.data),setday_is_load(true)});
        //  console.log(stock_years_mounth_day);
    }

    function GET_INFO(e){
        let url="/GET_INFO/"+year+"/"+month+"/"+e.target.value;
        axios.get(url)
        .then((res)=>{setinfo(res.data),setinfo_is_load(true),Table(res.data[0].id_stock)});

        }

    

    function Table(id){
        let url2="/get_stock_articles_epuise/"+id;
        axios.get(url2)
      .then((res)=>{setarticle_epuise(res.data),settable_articles(<MainDashboardStockTableProduct ID={id} />)});
    //   console.log(id)
    }

   
    
    return(
        <div>

<div className="flex flex-nowrap">

<spam className="basis-2/4 p-2 "> <h1 className="text-xl"><b><u>Sélectionnez la date de stock</u></b></h1></spam>
<spam className="basis-9/12  pt-2 pr-2  text-right">
        <NouveauStockDrawer/>      
                {/* <Drawer> cc</Drawer> */}
            </spam>
            </div> 
            <FormControl variant="standard" sx={{ ml: 1, minWidth: 160 }} >
                <InputLabel id="demo-simple-select-standard-label">Année du stock</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age" onChange={(e)=>{GET_Mounth(e),setyear(e.target.value),setinfo_is_load(fals)}}>
                {years_is_load?  stock_years.map((item)=>{ return <MenuItem value={item.year}>{item.year}</MenuItem>}):<MenuItem value="">--</MenuItem>}
                </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ ml: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-standard-label">mois</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
               
                label="Age" onChange={(e)=>{GET_Day(e),setmonth(e.target.value)}}
                >
                {mounth_is_load?  stock_years_mounth.map((item)=>{ return <MenuItem value={item.month}>{item.month}</MenuItem>}):<MenuItem value=""></MenuItem>}

                </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ ml: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-standard-label">Jour</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
               
                label="Age" onChange={(e)=>{setday(e.target.value),GET_INFO(e)}}
                >
                   {day_is_load? stock_years_mounth_day.map((item)=>{ return <MenuItem value={item.day}>{item.day}</MenuItem>}):<MenuItem value=""></MenuItem>}

                </Select>
        </FormControl>
        <br />
        <ButtonGroup variant="text" size="large" className=" flex mt-4  w-full  "  >
            <div className="basis-1/3 bg-red-50 border-solid   border-2 border-green-600 mr-12 rounded" >
                <MainDashboardStockProductsInfoButton startIcon={<ShoppingCart/>} name="Nombre articles" number={info_is_load?  info[0].nombre_article:0}
            color="secondary"/>
            </div> <br></br>

            <div className="basis-1/3 bg-red-50 border-solid  border-2 border-green-600 mr-12 rounded" >
                <MainDashboardStockProductsInfoButton startIcon={<MonetizationOn/>} name="Montant totale" color="success" number={info_is_load ? info[0].montant_totale:0}
            />
            </div >

            <div className="basis-1/3 bg-red-50 border-solid border-2 border-green-600 mr-12 rounded" >
                <MainDashboardStockProductsInfoButton startIcon={<ShoppingCartCheckoutSharp/>} name="Epuisé" number={article_epuise} color="error"
            />
            
            </div>


            {/* <Button className="basis-1/3" startIcon={<ShoppingCart/>} color="secondary" >
                Nombre d'articles 10
            </Button>

            <Button   className="basis-1/3"  startIcon={<MonetizationOn/>} color="success">
                Montant totale 1000.0DH
            </Button>

            <Button   className="basis-1/3"  startIcon={<ShoppingCartCheckoutSharp/>} color="error">
                Epuisé 9
            </Button> */}

        </ButtonGroup>
        <br>
        
        </br>
        <br></br>

        <hr />
        <div className="flex justify-between">
            <Typography variant="h5" className="m-2 font-mono"><b><u>Articles</u></b></Typography>
            {/* <Autocomplete /> */}
        </div>
{table_articles}
        </div>
    )
}


function NouveauStockDrawer(props){
    const [isDrawerOpen,setIsDrawerOpen]=useState(false);
    const [isFirstCompleted,setisFirstCompleted]=useState(false);
    
    return(
        <> 
        
         {/* <span className="border-b-2 border-b-green-600">  </span> */}
                <Button size="large"  variant="outlined" color="success"  startIcon={<Add/>}
                onClick={()=>setIsDrawerOpen(true)}>
                    
                    Nouveau Stock</Button>
          
            <Drawer anchor="right" transitionDuration={1000} open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
            <div className="min-h-screen bg-gradient-to-tl from-red-50 via-yellow-50 to-yellow-50">    
                <div  className="bg-gradient-to-tl from-yellow-50 via-yellow-50 to-indigo-50">
                    <NouveauStockStepper firstLabel="Création d'un nouveau stock" isFirstCompleted={isFirstCompleted}
                     firstContent={<NouveauStock ajouterStockAuCache={()=>setisFirstCompleted(true)}
                     />}
                    secondLabel="Ajout d'articles"  secondContent={<NewProductComponent/>}
                    thirdLabel="Validation" thirdContent={<Button variant="contained" color="success"  onClick={()=>{window.location.reload(false)}}>Valider</Button>}
                    />
                </div>
            </div>
            </Drawer>         
        </>
    )
}