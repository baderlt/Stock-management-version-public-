
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './UI/Header';
import Main from './UI/Main';
import AjouterCourrierForm from './UI/AjouterCourrierForm';
import BetweenHeaderAnMain from './UI/BetweenHeaderAndMain';
import ComposantRecherche from './UI/ComposantRecherche';
function Example(props) {
    const [isFormShow,setForm]=useState("");
//const [data,setData]=useState(ajout);


    return (
        // <div className="container">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8">
        //             <div className="card">
        //                 <div className="card-header">Example Component</div>
        //                   <Header/>
        //                   <hr/>
        //                   sdsd
        //                   <Main/>  
        //                 <div className="card-body">I'm an example component!</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='container m-3' style={{}}>
            {/* <button onClick={()=>{setForm(<AjouterCourrierForm/>)}}>Click me</button> */}
            <Header/>
            <hr />
            <BetweenHeaderAnMain showForm={()=>{setForm(<AjouterCourrierForm/>)}}
             showSearch={()=>{setForm(<ComposantRecherche/>)}}/>
            <div className='row' style={{textAlign:'right'}} dir="rtl">
                
                {isFormShow}
                
            </div>
            <Main/>  


        </div>
    );
}

//export default Example;

// if (document.getElementById('reactApp')) {
//     const Index = ReactDOM.createRoot(document.getElementById("reactApp"));

//     Index.render(
//         <React.StrictMode>
//             <Example/>
//         </React.StrictMode>
//     )
// }



// import App from './vue1_react/vue1';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Test_axios from './test/test2_axios';
// function App_vue() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
                   
                    
//   <Test_axios/><App/>
                     
                   
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App_vue;

// if (document.getElementById('app')) {
//     const Index = ReactDOM.createRoot(document.getElementById("app"));

//     Index.render(
//         <React.StrictMode>
//             <App_vue/>
//         </React.StrictMode>
//     )
// }




// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import Compteur from './test/test';


// // import  Compteur_use_redux  from './tp_for_redux_compteur.jsx/compteur';
// // import { Store } from './Redux/reducer';
// // import { Provider } from 'react-redux';
// // function Example() {
// //     return (
// //         <div className="container">
// //             <div className="row justify-content-center">
// //                 <div className="col-md-8">
// //                     <div className="card">
// //                         <div className="card-header">Example Component</div>
// //   <Provider store={Store}><Compteur_use_redux/></Provider>
// //                         <div className="card-body">I'm an example component..........!</div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Example;

// // if (document.getElementById('app')) {
// //     const Index = ReactDOM.createRoot(document.getElementById("app"));

// //     Index.render(
// //         <React.StrictMode>
// //             <Example/>
// //         </React.StrictMode>
// //     )
// // }
