
import { setContent } from "../features/PopupRGPD/redux/RGPD.reducer";
import { setFooterCopyright, setFooterListMenu } from "../redux/footer/footer.action";
import { setIsShowMenu, setIsShowSearch, setIsUpMenu, setMenuData } from "../redux/header/header.actions"


export const initializePage = (dispatch,generalSettingsData) => {
    const {menus:{menu_header_sec:{childrens: menu_items}, menu_header_orange:{childrens: menu_orange}}, menus, copyright_text, rgpd}= generalSettingsData;
    dispatch(setIsShowMenu(false));
    dispatch(setIsShowSearch(false));
    dispatch(setFooterListMenu(menus));
    dispatch(setMenuData({sub_menu: menu_items || [], orange_menu: menu_orange ||[]}));
    dispatch(setFooterCopyright(copyright_text));
    dispatch( setIsUpMenu(true));

    dispatch(setIsShowMenu(false));
    dispatch(setContent(rgpd))
}

export const colorConverterCSS = (color, styles) => {
    switch (color) {
        case 'orange':
            return styles.color_orange;
        case 'blue':
            return styles.color_blue;
        case 'brown':
            return styles.color_brown;
        case 'darkgreen':
            return styles.color_darkgreen;
        case 'white':
            return styles.color_white;
        default:
            return styles.color_darkgreen;
    }
}

