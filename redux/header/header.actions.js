import headerTypes from "./header.types"
export const setIsShowMenu =  (isShow) => ({
    type: headerTypes.SET_IS_SHOW_MENU,
    payload: isShow
})

export const setIsShowSearch = (isShow) => ({
    type: headerTypes.SET_IS_SHOW_SEARCH,
    payload: isShow
})

export const setIsUpMenu = (isUpMenu) => ({ 
    type: headerTypes.SET_IS_UP_MENU,
    payload: isUpMenu
})

export const setMenuData = (data) => ({
    type: headerTypes.SET_MENU_DATA,
    payload:data
}) 