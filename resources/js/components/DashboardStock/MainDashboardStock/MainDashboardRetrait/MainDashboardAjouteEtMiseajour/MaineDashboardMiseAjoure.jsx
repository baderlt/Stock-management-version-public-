import { useState } from "react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPen,faChartPie,faHistory,faChartLine, faPlusCircle,faPlus,faTrashCan,faBug,faSearch,faCheck} from '@fortawesome/free-solid-svg-icons'
export default function MaineDashboardMiseAjoure(){
    const [data,setdata]=useState();
    const [articles,setArticles]=useState();
    const [is_load,setis_load]=useState(false);
    const [qnt,setqnt]=useState(0);
    const [body,setbody]=useState();
    const [message,setmessage]=useState();
    const [error,setError]=useState();

    function onChange(e){
        let input_Value=e.target.value.toLowerCase();
        console.log(data)
        console.log(input_Value)
        let filterData = data[0].filter((item) => {
            return item.nom_article.toLowerCase().indexOf(input_Value) !== -1
  })



  console.log(filterData);
  setArticles([filterData])
}
// function validation(e){
//     // e.prevenDefault();
//     alert(e.target[0]);
// }

let handleSubmit = async (id) => {
    console.log(id)
  setbody( JSON.stringify(body));
    try {
      const newLocal = "/Mise_Ajour_article/"+body;
      let res = await axios.get(newLocal);
       
       if(res.status==200){
        setError('')
        const timeoutId = setTimeout(() => {
          setmessage(res.data);
        }, 1);
        const clear = setTimeout(() => {
          return () => clearTimeout(timeoutId),setmessage('');
          
        }, 1000);
       }

    } catch (err) {
      console.log(err);
      setmessage('')
      const timeoutId = setTimeout(() => {
        setError('Invalid Champ')
      }, 1);
      const clear = setTimeout(() => {
        return () => clearTimeout(timeoutId),setError('');
        
      }, 2000);
      
    }
  };



    useEffect(()=>{
        axios.get('/article_data')
        .then((respons)=>{setdata([respons.data]);setArticles([respons.data]);setis_load(true)})
    },[])
    return (
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


            <div className="bg-gray-200 pl-1 flex">
                    <i><FontAwesomeIcon icon={faSearch}/></i>
                    <input type="test"    className="p-2 bg-gray-200 rounded focus:outline-none" placeholder="Article.." onChange={(e)=>{onChange(e)}}/>
                </div><br/>  
                
        {
        is_load? <div>
            
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                Nom d'article
                </th>
                <th scope="col" class="px-6 py-3">
                   Unité
                </th>
                <th scope="col" class="px-6 py-3">
                Quantite initiale
                </th>
                <th scope="col" class="px-6 py-3">
                DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>   
        <tbody>
            {/* {console.log(data[0][0].id)} */}
        {articles ? articles[0].map((item)=>{ return <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        {/* <form  action='/gg' method="GET" > */}
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                <input type="text" value={item.id}/>{item.id}
                </th>
                <td class="px-6 py-4">
                <input type="text" value={item.nom_article} />
                </td>
                <td class="px-6 py-4">

                <input type="text" value={item.unite==null ? 'Unité': item.unite} />{item.unite==null ? 'Unité': item.unite} 
                </td>
                <td class="px-6 py-4">
               <input type="text"  value={qnt} onChange={(e)=>{setqnt(e.target.value)}}/> 
               {item.quantite_initiale==null? 0:item.quantite_initiale}
                </td>
                <td class="px-6 py-4">
                <input type="text" value={item.created_at.split('T')[0]} />
                </td>
                <td class="px-6 py-4">
                
                   <button  onClick={()=>{setbody({id:item.id,nom_article:item.nom_article,qnt:qnt}),handleSubmit(item.id)}}>
                    <i className="text-xl flex gap-x-4 items-center  py-2 text-green-500 hover:text-indigo-600 "><FontAwesomeIcon icon={faCheck}/> &ensp; </i> </button> 
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> &ensp; &ensp;<FontAwesomeIcon icon={faTrashCan}/></a> */}
                </td>
    
           </tr>
   
        //    </form>
    
    }):''}
        </tbody>
    </table>
</div>

        </div> 
        :''
    }
        </div>
    )
}