

import "./Dashboard.css";
import {Link} from "react-router-dom";
import { regeister } from "../Context/RegistrationContextProvider";
import { useState,useContext } from "react";


function RegeisterpageTwo()
{

    let {state,dispatch} = useContext(regeister);

    
    


    let [obj,setobj]= useState({})
 
    const inputhandle=(target)=>{

        let {name,value} = target;
          
           setobj({...obj,[name]:value})

    }
    const Next=()=>{

        dispatch({type:"regeisterationtotal",payload:{...obj}})
        console.log(state)

    }

    return (<div className="whole_dashborad">
         <div>
             <input type="text" name="address" placeholder="Adress" onChange={(e)=>{inputhandle(e.target)}}/>
             <input type="text" name="phonenumber" placeholder="Phonenumber" onChange={(e)=>{inputhandle(e.target)}}/>
             <div>{<Link  onClick={()=>{Next()}} to="/register/two">Submit</Link>}</div>
               
         </div>
    </div>)
}
export default RegeisterpageTwo

