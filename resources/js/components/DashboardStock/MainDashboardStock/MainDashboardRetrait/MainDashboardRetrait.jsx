import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import React from "react"
import { useEffect } from "react";
 

// class MainDashboardRetrait extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         Profile: [],
//       }
//       this.cancelToken = ''
//       this.getVal = this.getVal.bind(this)
//       this.node = React.createRef()
//     }
//     componentDidMount() {
//       document.addEventListener('mousedown', this.getVal)
//     }
//     componentWillUnmount() {
//       document.removeEventListener('mousedown', this.getVal)
//     }
//     getVal = (e) => {
//       if (this.node.current.contains(e.target)) {
//         return
//       }
//       this.setState({
//         userList: [],
//       })
//     }
//     onChange = async (e) => {
//       if (this.cancelToken) {
//         this.cancelToken.cancel()
//       }
//       this.cancelToken = axios.CancelToken.source()
//       await axios
//         .get('/article_data', {
//           cancelToken: this.cancelToken.token,
//         })
//         .then((res) => {
//           this.setState({
//             Profile: res.data,
//           });console.log(res.data)
//         })
//         .catch((e) => {
//           if (axios.isCancel(e) || e) {
//             console.log('Data not found.')
//           }
//         })
//       let stringKwd = e.target.value.toLowerCase()
//       let filterData = this.state.Profile.filter((item) => {
//         return item.nom_article.toLowerCase().indexOf(stringKwd) !== -1
//       })
//       this.setState({
//         Profile: [filterData],
//       })
//     }
//     render() {
//       return (
//         <>
//           <h2>React Search Filter Example</h2>
//           <div className="input-group mt-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Find ..."
//               ref={this.node}
//               onClick={this.getVal}
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="list-group">
//             {this.state.Profile.map((item) => {
//               return (
//                 <a
//                   className="list-group-item list-group-item-action"
//                   key={item.id}
//                 >
//                   {item.nom_article}
//                 </a>
//               )
//             })}
//           </div>
//         </>
//       )
//     }
//   }




export default function MainDashboardRetrait(props){

    ////// pour result de filter data
    const [Articles,setArticles]=useState();
    ////// pour data from base donnée
    const [data,setData]=useState();
    ////// pour éviter erreur de map  sans data
    const [is_load,setis_load]=useState(false);
    /////
    const [value_for_input,setvalue_for_input]=useState({id:0,name:''});
    ////
    const [date,setdate]=useState(format);

    /// 
    const [desabled,setdesabled]=useState(false);

     
     
     
    function  format(){
        const date=new Date();
      
        return date.toISOString().split('T')[0];

    }

    //////// useEfect pour import data from base donnée
    useEffect(()=>{
        axios.get('/article_data')
        .then((respons)=>{setData([respons.data]);})
    },[])



    //// function pour filter data 
    function onChange(e){
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
    
            function print(e){
                console.log(e.target.getAttribute('a-key'))
                setvalue_for_input({id:e.target.getAttribute('a-key'),name:e.target.value});
                setArticles('')
            }

    return(
        <div>
            <div className="px-10 border-b border-gray-200">
            <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">Retrait</h1>
            <p class="text-sm font-medium text-gray-500">
                Faire un retrait pour un fonctionnaire
            </p>
        </div>
        <div className="container mx-auto h-screen  bg-gray-100">
            <form action="#" className="flex flex-col space-y-4 p-3">
                <h4 className="text-center text-2xl font-medium font-sans">Recherche rapide</h4>
                <hr/>
                <input type="date" className="p-2 bg-gray-200 rounded focus:outline-none" value={date} onClick={(e)=>{e.target.className='bg-green-900'}}  />
                <div className="bg-gray-200 pl-1 flex">
                    <i><FontAwesomeIcon icon={faSearch}/></i>
                    <input type="test"    className="p-2 bg-gray-200 rounded focus:outline-none" placeholder="Article.." onChange={(e)=>{onChange(e)}}/>
                </div>
                <div className="list-group">
          {Articles ? Articles.map((item) => {
            return (
              <input className="list-group-item list-group-item-action"
                a-key={item.id} onClick={(e)=>{print(e)}}
                value={item.nom_article}
              />
            )
          }):''}
        </div>
               
            </form>
        </div>
    
  
        </div>
    )
}