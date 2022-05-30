const init = {isAuth:false};

const Authreducer = (state=init,{type,payload})=>{

         switch(type)
         {
             case "Authcontroller":
                return {...state,isAuth:payload} ;

                default :
                return {...state}
         }

     
}

export default Authreducer