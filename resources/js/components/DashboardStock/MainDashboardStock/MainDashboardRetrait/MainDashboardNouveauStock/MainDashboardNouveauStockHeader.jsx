import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight,faCheck,faCheckSquare,faBugSlash,faBug } from "@fortawesome/free-solid-svg-icons"
// import { DisabledByDefault } from "@mui/icons-material"
import MainDashboardNauveauStockBody from "./MainDashboardNauveauStockBody";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
export default function MainDashboardNouveauStockHeader(props){
    const Dispatch=useDispatch();


    const [form_article,setform_article]=useState('');
    const [date,setdate]=useState('');
    const [nombre_article,setnombre_article]=useState(0);
    const [montant_totale,setmontant_totale]=useState(0);
    const [message,setMessage]=useState();
    const [error,setError]=useState();
    const [Showdiv,setShowDiv]=useState(false);


   
   

    // function check(event){
    //     event.preventDefault();
      
  let handleSubmit = async (event) => {
    event.preventDefault();
    // let i=event.target.elements.length
    // //event.target[i].disabled=true
    // for(let j=0;j<i;j++){
    //  // event.target[j].disabled=true
    //  event.target[j].style.backgroundColor="blue"
    // }
  let body=JSON.stringify({
      date_stock:date,
      nombre_article:nombre_article,
      montant_totale:montant_totale,
    });
   
    try {
      const newLocal = "/ajout_stock/"+body;
      let res = await axios.get(newLocal);
       
       if(res.status==200){
        let i=event.target.elements.length
        //event.target[i].disabled=true
        for(let j=0;j<i;j++){
         // event.target[j].disabled=true
         event.target[j].style.backgroundColor="blue"
        }
        setError('')
        const timeoutId = setTimeout(() => {
          setMessage(res.data);
        }, 1);
        const clear = setTimeout(() => {
          return () => clearTimeout(timeoutId),setMessage('');
          
        }, 2000);
      
        setform_article(<MainDashboardNauveauStockBody stock={{date: event.target[0].value,nbr:event.target[1].value}}/>)
       }

    } catch (err) {
      console.log(err);
      setMessage('')
      const timeoutId = setTimeout(() => {
        setError('Invalid Champ')
      }, 1);
      const clear = setTimeout(() => {
        return () => clearTimeout(timeoutId),setError('');
        
      }, 2000);
      
    }
  };
//   handleSubmit()
// useEffect(() => {
  // const timeoutId = setTimeout(() => {
  //   setShowDiv(true);
  // }, 3000); // 5000 millisecondes = 5 secondes

//   return () => clearTimeout(timeoutId);
// }, []);

    return(
        <div>

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


        <form className="bg-gray-100 rounded m-2 p-1" onSubmit={handleSubmit} >
            <div className="flex flex-wrap justify-between mr-2">
               <div className="m-3 items-center border-b border-teal-500 basis-1/3 text-xl gap-x-4  py-2 text-gray-500">
                    <label htmlFor="dateStock" className="text-dark block mb-2">Date :</label>
                    <input className="text-xl appearance-none bg-transparent w-full
                     border-none text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" id="dateStock" name="date_stock" value={date} onChange={(e)=>{setdate(e.target.value)}} />
               </div>

              

               <div className="m-3 mr-2 items-center border-b border-teal-500 basis-1/3 text-xl gap-x-4  py-2  text-gray-500">
                    <label htmlFor="nombreArticles" className=" text-dark block mb-2">Nombre d'articles :</label>
                    <input className="text-xl appearance-none bg-transparent w-full
                     border-none text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number"  name="nombre_article" id="nombreArticles" min="0" defaultValue="0" value={nombre_article} onChange={(e)=>{setnombre_article(e.target.value)}} required
                    />
               </div>

               <div className="m-3 items-center border-b border-teal-500  basis-1/3 justify-self-start text-xl gap-x-4  py-2  text-gray-500">
                    <label htmlFor="montantTotale" className="text-dark block mb-2">Montant totale en DH:</label>
                    <input className="text-xl appearance-none bg-transparent w-full
                     border-none text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none rounded p-1" type="number" name="montant_totale" id="montantTotale" min="0" defaultValue="0" value={montant_totale} onChange={(e)=>{setmontant_totale(e.target.value)}}/>
               </div>

               
                <hr />
               <div className="flex w-max mt-2">
                <br />
               
               </div>
               
            </div>
  

               {/* <div>
               <label htmlFor="montantTotale" className="text-dark block mb-2">Observation:</label>
                    <textarea className="text-xl appearance-none bg-transparent w-full
                     border-none text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none rounded p-1" type="text" >
</textarea> 
               </div> */}
            <br />
            <div className="flex justify-end">
                <button class=" flex-shrink-0 bg-green-700 hover:bg-green-700 border-green-700 hover:border-green-700 border-4 text-white py-1 px-2 text-xl " type="submit">
                        Suivant <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>

    
        </form>
        <div>
        {form_article}
        </div>
        </div>
    )

}