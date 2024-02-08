import ButtonAsideDashboard from "./ButtonAsideDashboard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPen,faSignOut,faHistory,faChartLine,faUser, faStoreAlt, faGear, faUserAlt, faHeadset} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import axios from "axios";
import { motion } from "framer-motion";
export default function AsideDashboardStock(props){
    const [user,setuser]=useState('');
    const [isload,setisload]=useState(false)
    useEffect(()=>{
        axios.get('/getuser')
        .then((response)=>{setuser(response.data);setisload(true)})
    },[])
    const [className,setclassname]=useState({retrait:' -mb-6',stock:'-mb-6  bg-gray-500 text-red-600 rounded-md ',historique:'-mb-6',config:'-mb-6',bilan:'-mb-6',support:'-mb-6 '})
    return(

        <div className="basis-1/5 border-r border-gray-300 border-r-1 flex flex-col py-4 px-4
        bg-gray-800 rounded-r-md " >
           <b>  {isload? <div className="text-green-600 ml-12 "><FontAwesomeIcon icon={faUser}/>&ensp;{user}</div>:''}</b>
           <motion.ul animate={{paddingTop:'10px', marginTop:'20px', paddingLeft:'0px',display:'flex',gap:'1.5rem' ,flexDirection: 'column'}}>
            {/* <ul className="flex flex-col gap-y-6 pt-10 pl-0 "> */}
            <li className={className.stock} 
            onClick={()=>{props.ajout('stock'),setclassname({retrait:'-mb-6 ',stock:'-mb-6 bg-gray-500 rounded-md',historique:'-mb-6',config:'-mb-6',bilan:'-mb-6',support:'-mb-6'})}}>
                    <ButtonAsideDashboard value="Stock" 
                    iconInTag={<FontAwesomeIcon icon={faStoreAlt}/>} />
             
                </li>
                <hr />
                <li className={className.retrait}  onClick={()=>{props.ajout('retrait'),setclassname({retrait:'-mb-6 bg-gray-500 rounded-md ',stock:'-mb-6',historique:'-mb-6',config:'-mb-6',bilan:'-mb-6',support:'-mb-6'})}}>
                    <ButtonAsideDashboard value="Retrait"  iconInTag={<FontAwesomeIcon icon={faPen}/>}
                  />
                </li>
                <hr />
                <li className={className.bilan} onClick={()=>{props.ajout('bilan'),setclassname({retrait:'-mb-6',stock:'-mb-6',historique:'-mb-6',config:'-mb-6',bilan:'-mb-6  bg-gray-500 rounded-md',support:'-mb-6'})}}>
                    <ButtonAsideDashboard value="Bilan" iconInTag={<FontAwesomeIcon icon={faChartLine}/>}/>
                </li>
                <hr />
                <li className={className.historique} onClick={()=>{props.ajout('historique'),setclassname({retrait:'-mb-6',stock:'-mb-6',historique:'-mb-6  bg-gray-500 rounded-md',config:'-mb-6',bilan:'-mb-6',support:'-mb-6'})}}>
                    <ButtonAsideDashboard value="Historique" iconInTag={<FontAwesomeIcon icon={faHistory}/>}
            />
                </li>
                <hr />
                <li className={className.config} onClick={()=>{props.ajout('Configuration'),setclassname({retrait:'-mb-6',stock:'-mb-6',historique:'-mb-6',config:'-mb-6  bg-gray-500 rounded-md',bilan:'-mb-6',support:'-mb-6'})}}>
                    <ButtonAsideDashboard value="Configuration" iconInTag={<FontAwesomeIcon icon={faGear}/>}/>
                </li>
                <hr />
                <li className={className.support} onClick={()=>{props.ajout('support'),setclassname({retrait:'-mb-6',stock:'-mb-6',historique:'-mb-6',config:'-mb-6 ',bilan:'-mb-6',support:'-mb-3 bg-gray-500 rounded-md'})}}>
                    <ButtonAsideDashboard value="Support" iconInTag={<FontAwesomeIcon icon={faHeadset}/>}/>
                </li>
                <hr />
     
                </motion.ul>
            <div className="flex flex-row justify-end static">
            {/* <ButtonForIcon iconInTag={<FontAwesomeIcon icon={faMessage}/>} />
            <ButtonForIcon iconInTag={<FontAwesomeIcon icon={faBell}/>} /> */}
            <form id="logout-form" action="logout" method="POST" class="">
            <button type="submit" className=" fixed bottom-0 left-4 text-xl flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group  "> <i className="text-xl flex gap-x-4 items-center  py-2 text-red-500 hover:text-indigo-600 "><FontAwesomeIcon icon={faSignOut} rotation={180} size="xl"/> </i></button>
                                    </form>
           
        </div>
</div>
        



     
       
    
        )
}