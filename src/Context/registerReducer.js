// write reducer for the registartion reducer
const init = { regeisterdata: { email: "", username: "", address: "", phonenumber: "" } };

const regeisterationreducer = (state = init, { payload, type }) => {

    switch (type) {
        case "regeisterationone":
            return { ...state, regeisterdata: { ...state.regeisterdata,username:payload.username,email:payload.email} }
           

            case "regeisterationtotal":
            return { ...state, regeisterdata: { ...state.regeisterdata,address:payload.address,phonenumber:payload.phonenumber} }


        default:
            return { ...state }
    }


}
export default regeisterationreducer