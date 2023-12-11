import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPen,faChartPie,faHistory,faChartLine, faPlusCircle,faPlus,faTrashCan,faSearch} from '@fortawesome/free-solid-svg-icons'
export default function MainDashboardNauveauStockBody(props){
    // console.log(props.stock)

  ////// pour result de filter data
  const [Articles,setArticles]=useState();
  ////// pour data from base donnée
  const [data,setData]=useState();
//   const [is_load,setis_load]=useState(false);
const [nom_article,setNom_article]=useState();
const [id,setId]=useState();



    const [list,setliste]=useState([props.stock.date,props.stock.date]);
   console.log(list)
    function liste(){
    var  list_var=[];
    for(let i=0 ;i <= props.nbr;i++){
            list_var[i]=props.date;
            console.log(list_var)
     
    }
    return list_var;
}

useEffect(()=>{
    axios.get('/article_data')
    .then((respons)=>{setData([respons.data]);})
},[])

function onChange(e){
    let input_Value=e.target.value.toLowerCase();
    console.log(data)
    console.log(input_Value)
    let filterData = data[0].filter((item) => {
        return item.nom_article.toLowerCase().indexOf(input_Value) !== -1
})
// setis_load(true)
console.log(filterData);
setArticles(filterData)
}


// function print(e){
//     console.log(e.target.getAttribute('a-key'))
//     setNom_article(e.target.value);
//     setArticles(e.target.getAttribute('a-key'))
  
// }



    return(
        <div>
              {/* {props.stock.date}           */}
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  STOCK
                </th>
                <th scope="col" class="px-6 py-3">
                Nom d'article
                </th>
                <th scope="col" class="px-6 py-3">
                   ID
                </th>
                <th scope="col" class="px-6 py-3">
                Quantite initiale
                </th>
                <th scope="col" class="px-6 py-3">
                Observation
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>   
        {/* <tbody> */}
            {list.map((item)=>{ return <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
               <input type="date"  value={item}/> 
                </th>
                <td class="px-6 py-4">
                <input type="text" placeholder="Nom Article" value={nom_article} onChange={onChange} />
                <div className="list-group">
          {Articles ? Articles.map((item) => {
            return (
              <input className="list-group-item list-group-item-action" 
                a-key={item.id} 
                value={item.nom_article}
              />
            )
          }):''}
        </div>
                </td>
                <td class="px-6 py-4">

                <input type="text" value={id} placeholder="ID" />
                </td>
                <td class="px-6 py-4">
                    <input type="numbre" />
                </td>
                <td class="px-6 py-4">
               <input type="text" placeholder="Observation"/>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><FontAwesomeIcon icon={faPen}/> &ensp; Edit </a>

                </td>
           </tr>
           

    
             })} 
        {/* </tbody> */}
        </table>
        </div>
        </div>
    )
} 