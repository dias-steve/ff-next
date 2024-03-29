import footerTypes from "./footer.types";

export const INITIAL_STATE = {
    footer_menu_list: {},
    copyright: "copyright",
}

const footerReducer =  (state=INITIAL_STATE,  action) => {
    switch (action.type) {
        case footerTypes.SET_FOOTER_LIST_MENU:
            return {
                ...state,
                footer_menu_list: action.payload
            }
        case footerTypes.SET_FOOTER_COPYRIGHT:
            return {
                 ...state, 
                copyright: action.payload 
            }
        default:
            return state;
    }
}

export default footerReducer;