import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './Header/Header';
import { Store } from './redux/reducers';
import DashboardStockApp from './DashboardStock/DashboardStockApp';
import { Provider } from 'react-redux';
export default function App(props){
    return(
        <div className=" mx-auto" >
           <Provider store={Store}>
        
            <DashboardStockApp/>
            </Provider>
            
        </div>
    )
}


if (document.getElementById('reactApp')) {
    const Index = ReactDOM.createRoot(document.getElementById("reactApp"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
