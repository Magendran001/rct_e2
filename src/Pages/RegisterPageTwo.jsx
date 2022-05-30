

import "./Dashboard.css";
import {Link} from "react-router-dom";
import { regeister } from "../Context/RegistrationContextProvider";
import { useState,useContext } from "react";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";


function RegeisterpageTwo()
{

    let {state,dispatch} = useContext(regeister);
    let navigate = useNavigate();
    let username = state.regeisterationreducer?.regeisterdata.username||"";
    let email = state.regeisterationreducer?.regeisterdata.email||"";
    console.log(username,email,"username")
    console.log(state)
    
    useEffect(()=>{
         
        if(username.length==0 || email.length==0)
        {
            alert("Enter correct username and email")
            navigate("/register/one")  
        }
          

        console.log(state.Authreducer.isAuth,"kkkkkk")
           if(state.Authreducer.isAuth)

           {
               navigate("/")
           }

    },[state])


    let [obj,setobj]= useState({})
 
    const inputhandle=(target)=>{

        let {name,value} = target;
          
           setobj({...obj,[name]:value})

    }
    
    const Next=()=>{

        dispatch({type:"regeisterationtotal",payload:{...obj}})
        console.log(state);
        dispatch({type:"Authcontroller",payload:true})
        

        

    

      

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

