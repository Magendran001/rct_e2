// Write code for Registration context
import {createContext,useReducer} from "react"
import regeisterationreducer from "./registerReducer";
  
const regeister = createContext("");
export {regeister}
 
function Regeistrationcontext({children})
{
    const init = {regeisterdata:{ email: "", username: "", address: "", phonenumber: ""} };
      const [state,dispatch] = useReducer(regeisterationreducer,init)     
    
    return (<regeister.Provider value={{state,dispatch}}>{children}</regeister.Provider>)
}
export default Regeistrationcontext