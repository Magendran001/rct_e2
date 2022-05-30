// Write code for Registration context
import {createContext,useReducer} from "react";
import {combineReducers} from "redux";
import regeisterationreducer from "./registerReducer";
import Authreducer from "./AuthContext";

  
const regeister = createContext("");
export {regeister}
 
function Regeistrationcontext({children})
{

    const rootreducer = combineReducers({regeisterationreducer,Authreducer})
    const init = {regeisterdata:{ email: "", username: "", address: "", phonenumber: ""}};
      const [state,dispatch] = useReducer(rootreducer,init)     
    
    return (<regeister.Provider value={{state,dispatch}}>{children}</regeister.Provider>)
}
export default Regeistrationcontext