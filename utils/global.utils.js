
import { setFooterCopyright, setFooterListMenu } from "../redux/footer/footer.action";
import { setIsShowMenu, setIsShowSearch } from "../redux/header/header.actions"


export const initializePage = (dispatch,generalSettingsData) => {
    const {menus, copyright_text}= generalSettingsData;
    dispatch(setIsShowMenu(false));
    dispatch(setIsShowSearch(false));
    dispatch(setFooterListMenu(menus));
    dispatch(setFooterCopyright(copyright_text));
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

