import headerTypes from "./header.types";

export const INITIAL_STATE = {
    is_show_menu: false,
    is_show_search: false,
    is_up_menu: true,
    menus_data: {},

}

const headerReducer = (state=INITIAL_STATE,  action) => {
    switch (action.type) {
        case headerTypes.SET_IS_SHOW_MENU: 
            return{
                ...state,
                is_show_menu: action.payload
            }
        case headerTypes.SET_IS_SHOW_SEARCH: 
            return{
                ...state,
                is_show_search: action.payload
            }
        case headerTypes.SET_IS_UP_MENU:
            return{
                ...state,
                is_up_menu: action.payload
            }
        case headerTypes.SET_MENU_DATA:
                return{
                    ...state,
                    menus_data: action.payload
                }
        default:
            return state;
    }
}

export default headerReducer;