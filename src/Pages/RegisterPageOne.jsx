
import "./Dashboard.css";
import {Link} from "react-router-dom";
import { regeister } from "../Context/RegistrationContextProvider";
import { useState,useContext } from "react";


function Regeisterpageone()
{

    let {state,dispatch} = useContext(regeister);

    
    


    let [obj,setobj]= useState({})
 
    const inputhandle=(target)=>{

        let {name,value} = target;
          
           setobj({...obj,[name]:value})

    }
    const Next=()=>{

        dispatch({type:"regeisterationone",payload:{...obj}});
       
     

    }

    return (<div className="whole_dashborad">
         <div>
             <input type="text" name="username" placeholder="Username" onChange={(e)=>{inputhandle(e.target)}}/>
             <input type="text" name="email" placeholder="UserEmail" onChange={(e)=>{inputhandle(e.target)}}/>
             <div>{<Link  onClick={()=>{Next()}} to="/register/two">Next</Link>}</div>
               
         </div>
    </div>)
}
export default Regeisterpageone