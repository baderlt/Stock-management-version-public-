import { Button, FormGroup, Stack, TextField, Typography,Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faCheck,faCheckSquare,faBugSlash,faBug } from "@fortawesome/free-solid-svg-icons"

export default function NewProductComponent(props){
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
                console.log(data)
                console.log(input_Value)
                let filterData = data[0].filter((item) => {
                    return item.nom_article.toLowerCase().indexOf(input_Value) !== -1
          })


          setis_load(true)
          console.log(filterData);
          setArticles(filterData)
    }


    function print_info(e){
        console.log(e.target.getAttribute('a-key'));
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
        // if(textButtonAjouter=="Modifier"){
        //     setcheckIfDisabled(false)
        //     settextButtonAjouter("Fin Modif")
        //     setvariantButtonAjouter("contained")
        //     setcolorButtonAjouter("success")
        //     //dispatch({type:"AJOUTER_ARTICLE_AU_CACHE"});
        //     return
        // }
        if(textButtonAjouter=="Fin Modif"){
            settextButtonAjouter("Modifier")
            setvariantButtonAjouter("contained")
            setcolorButtonAjouter("error")
            setcheckIfDisabled(true)
            return
        }


    
       

        //dispatch({type:"AJOUTER_ARTICLE_AU_CACHE"});
        
        setvariantButtonAjouter("contained")
        setcolorButtonAjouter("error")
        // setcheckIfDisabled(true)
        console.log(id_article);
        // dispatch({type:"AJOUTER_ARTICLE_AU_CACHE" });
        axios.get('/get_last_stock').then((res)=>{setstock(res.data),Ajouter_articles(res.data)});
        
        // Ajouter_articles(3);
        // if(trackStateChange==0){
        //     dispatch({type:"AJOUTER_ARTICLE_AU_CACHE"});
        // }
        // trackStateChange=1 
    }


function Ajouter_articles(id){
    console.log(quantiteInitiale+'stock'+id+'arti'+id_article+'obs'+observation);
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
          console.log(error);
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
        // disabledThis(true)
        dispatch({type:"AJOUTER_ARTICLE_AU_CACHE" });
        seterror('')
        console.log(res.data)
          const timeoutId1= setTimeout(() => {
            setmessage('Article Validé');
          }, 1);
          const clear = setTimeout(() => {
            return () => clearTimeout(timeoutId1),setmessage('');
            
          }, 2000);
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
  
    // console.log(res.status)




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
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button></div>:''}


    {error? 
          <div id="session" class="alert alert-danger alert-dismissible fade show" role="alert" style={{zIndex: 2,position:'absolute',top: 0,width:'400px',right: 0}}>
    <i> <FontAwesomeIcon icon={faBug}/>&ensp; 
    {error}</i> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button></div>:''}
            <Typography className="text-center"></Typography>
                <Stack spacing={2} direction="row" className="mt-1">
                    <FormGroup>
                        {/* <Input placeholder="Nom aticle" variant="solid" type="text"/> */}
                        <TextField disabled={checkIfDisabled} variant="standard" type="text" label="Nom d'article" value={nomArticle}
                         onChange={(e)=>{setNomArticle(e.target.value),onChange_(e)}} required>
                        </TextField>
                        <div className="list-group">
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
                        <Button variant={variantButtonAjouter} color={colorButtonAjouter} disabled={checkIfDisabled} className=""
                         onClick={ajouterArticleAuCache}  
                        >{textButtonAjouter}</Button>
                        {/* <Button variant="outlined" color="success" className="min-h-full"
                            onClick={testDispatch}
                        >Test dispatch</Button> */}
                    </FormGroup>
                  
                </Stack>
                {/* </form> */}
        </>
      
    )
}