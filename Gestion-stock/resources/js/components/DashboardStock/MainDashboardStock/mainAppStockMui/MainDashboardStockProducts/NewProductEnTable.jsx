import { Button, FormGroup, Stack, TextField, Typography,Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faCheck,faCheckSquare,faBugSlash,faBug } from "@fortawesome/free-solid-svg-icons"
import { Add } from "@mui/icons-material";

export default function NewProductEnTable(props){
    const dispatch=useDispatch();
      ////// pour result de filter data
      const [Articles,setArticles]=useState();
      ////// pour data from base donnée
      const [data,setData]=useState();
      ////// pour éviter erreur de map  sans data
      //const [is_load,setis_load]=useState(false);
      //const [value_for_input,setvalue_for_input]=useState({id:0,name:'Nom darticle',quantite:0});

      useEffect(()=>{
        axios.get('/article_data')
        .then((respons)=>{setData([respons.data]);})
    },[])



    //// function pour filter data 
    function onChange_(e){
                let input_Value=e.target.value.toLowerCase();
            
                let filterData = data[0].filter((item) => {
                    return item.nom_article.toLowerCase().indexOf(input_Value) !== -1
          })


          setis_load(true)
       
          setArticles(filterData)
    }


    function print_info(e){
   
        Setid_article(e.target.getAttribute('a-key'));
        setNomArticle(e.target.value)
    
        // setvalue_for_input({id:e.target.getAttribute('a-key'),name:e.target.value,quantite:res.data});
        setArticles('')
        // console.loge(res.data)
      
        

    }
       
    const [textButtonAjouter,settextButtonAjouter]=useState("Ajouter");
    const [variantButtonAjouter,setvariantButtonAjouter]=useState("outlined")
    const [colorButtonAjouter,setcolorButtonAjouter]=useState("secondary")
    const [checkIfDisabled,setcheckIfDisabled]=useState(false)
    let trackStateChange=0;
    function ajouterArticleAuCache(){        
        setvariantButtonAjouter("contained")
        setcolorButtonAjouter("error")
      
 Ajouter_articles(props.id_stock);
        
    }


function Ajouter_articles(id){
 
    let body=JSON.stringify({
            quantite_initiale_article:quantiteInitiale,
            id_stock:id,
            id_article:id_article,
            observation:observation

    });

    try {
      const newLocal ="/Ajoute_article_en_stock/"+body;
      axios.post(newLocal).then((res)=>{setmessage_(res.data)})
      .catch(
        function(error){
          settextButtonAjouter("Modifier")
          setcheckIfDisabled(false)
       
          setmessage('')
          const timeoutId2= setTimeout(() => {
              seterror('Anvalid Champ')
          }, 1);
          const clear = setTimeout(() => {
            return () => clearTimeout(timeoutId2),seterror('');
            
          }, 2000);
          
        }
         )
      function setmessage_(res){
        setcheckIfDisabled(true)
        settextButtonAjouter("Validé")
        seterror('')
     
          const timeoutId1= setTimeout(() => {
            setmessage('Article Validé');
        
          }, 1);
          const clear = setTimeout(() => {
            return () => clearTimeout(timeoutId1),setmessage(''),props.close(true);
            
          }, 1000);
      }
    
           }
           catch (err) {
      console.log(err);
      setmessage('')
      const timeoutId2= setTimeout(() => {
          seterror('Anvalid Champ')
      }, 1);
      const clear = setTimeout(() => {
        return () => clearTimeout(timeoutId2),seterror('');
        
      }, 2000);
      
    }
  }
  




    const [nomArticle,setNomArticle]=useState("");
    const [quantiteInitiale,setQuantiteInitiale]=useState();
    const [id_article,Setid_article]=useState();
    const [stock,setstock]=useState()
    const [observation,setobservation]=useState("")
    const [is_load,setis_load]=useState(false);
    const [message,setmessage]=useState();
   const [error,seterror]=useState();
    // console.log(stock)
    // const [unite,setUnite]=useState("");
    return(
        <>
          {message? 
    <div id="session" class="alert alert-success alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',width:'400px',top: 0,right: 0}}>
    <i><FontAwesomeIcon icon={faCheck}/>&ensp; 
    {message}</i> 
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button> */}
    </div>:''}


    {error? 
          <div id="session" class="alert alert-danger alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',top: 0,width:'400px',right: 0}}>
    <i> <FontAwesomeIcon icon={faBug}/>&ensp; 
    {error}</i> 
    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button> */}
    </div>:''}

    {/* <Typography id="modal-modal-title" variant="h6" component="h2" className="text-green-700">
     <Button size="large"  variant="outlined" color="success"  startIcon={<Add/>}>
                    
                     Ajouter Article en Stock
      </Button> */}
    {/* </Typography> */}
            <Typography className="text-center"></Typography>
                <Stack spacing={3} direction="row" className="mt-1">
                    <FormGroup>
                        {/* <Input placeholder="Nom aticle" variant="solid" type="text"/> */}
                        <TextField disabled={checkIfDisabled} variant="standard" type="text" label="Nom d'article" value={nomArticle}
                         onChange={(e)=>{setNomArticle(e.target.value),onChange_(e)}} className='w-400'>
                        </TextField>
                        <div className="list-group absolute mt-14">
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
                    <FormGroup>
                    {/* <Input placeholder="Quantité initiale" variant="solid" type="number"/> */}
                    <TextField disabled={checkIfDisabled} variant="standard" type="number" label="Quantité initiale"
                     onChange={(e)=>{setQuantiteInitiale(e.target.value)}} required>
                        </TextField>
                    </FormGroup>
                    <FormGroup>
                    <TextField disabled={checkIfDisabled} variant="standard" type="text" label="Observationté" 
                     onChange={(e)=>{setobservation(e.target.value)}} required>
                        </TextField>
                    </FormGroup>
                    <FormGroup>
                        {/* <Button color="success" variant="outlined" className="w-full h-full"
                        onClick={props.ajouterStockAuCache}>
                            Suivant
                        </Button> */}
                        <Button variant={variantButtonAjouter} color={colorButtonAjouter} disabled={checkIfDisabled} className="float-left "
                         onClick={ajouterArticleAuCache}  
                        >{textButtonAjouter}</Button>

{/* <Button  color={'error'} 
                        >Close</Button> */}
                        {/* <Button variant="outlined" color="success" className="min-h-full"
                            onClick={testDispatch}
                        >Test dispatch</Button> */}
                    </FormGroup>
                  
                </Stack>
                {/* </form> */}
        </>
      
    )
}