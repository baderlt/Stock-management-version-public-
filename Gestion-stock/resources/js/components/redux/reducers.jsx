import { combineReducers, createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { stepperCompletionReducer } from "./redusers";
import { redusersubmite } from "./reduserSubmite";
// import reduser_user from "./reduser_user";
const initstate={composant:''}
const reduser=(state=initstate,action)=>{
    console.log(action);
    if (action.type=='mise'){
        return {...state,composant:action.payload}
    }
    if(action.type=='ajoute'){
   return{...state,composant:action.payload}
    }
   
    return state;

}


const redusers=combineReducers({composant:reduser,reduser_submite:redusersubmite,stepperCompletionReducer:stepperCompletionReducer});
export const Store=createStore(redusers,{},applyMiddleware(thunk));

