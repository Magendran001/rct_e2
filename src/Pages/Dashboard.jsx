import { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { regeister } from "../Context/RegistrationContextProvider";


import {useNavigate} from "react-router-dom"


function Dashboard()
{
    let {state,dispatch} = useContext(regeister);
    let address = state.regeisterationreducer?.regeisterdata.address||"";
    let phone = state.regeisterationreducer?.regeisterdata.phonenumber||"";

    let isAuth = state.Authreducer?.isAuth||false;
    
    let navigate = useNavigate();
    // console.log(state.Authreducer.isAuth,"dashboard")
    


    useEffect(()=>{
               
        console.log(state,"statessssssss");

       
       
 
    },[state])

    return (<div>Welcome to dashboard

       {isAuth?<div onClick={()=>{ dispatch({type:"Authcontroller",payload:false})}}><Link to="/register/one">Logout</Link>
              
               
           
          <div>Email:{state.regeisterationreducer.regeisterdata.email} </div>
          <div>Phonenumber:{state.regeisterationreducer.regeisterdata.phonenumber} </div>
          <div>address:{state.regeisterationreducer.regeisterdata.address} </div>
          <div>username:{state.regeisterationreducer.regeisterdata.username} </div>


       </div>:<Link to="/register/one">Regeister</Link>}
    </div>)
}
export default Dashboard