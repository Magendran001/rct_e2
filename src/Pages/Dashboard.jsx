import { useEffect } from "react";
import { Link } from "react-router-dom";


import {useNavigate} from "react-router-dom"

function Dashboard()
{
       
    let navigate = useNavigate();


    useEffect(()=>{
        

    },[])

    return (<div><Link to="/register/one">Regeister</Link></div>)
}
export default Dashboard