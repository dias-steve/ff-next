import { createSlice} from '@reduxjs/toolkit';


const initialState = {
    content: {
        message: "",
        title:"",
        btn_label_accept: null,
        rgpd_pop_up_btn_label_cookie: null,
        rgpd_pop_up_btn_link_cookie: null
    },
    isAccepted: false
}
const rgpdSlice = createSlice({
    name: "rgpd", 
    initialState,
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
        },
        setIsAccepted: (state, action) => {
            state.isAccepted = action.payload
        }
    }
})

export const {setContent, setIsAccepted} = rgpdSlice.actions

export default rgpdSlice.reducer