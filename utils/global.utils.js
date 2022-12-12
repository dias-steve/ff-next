import { setIsShowMenu, setIsShowSearch } from "../redux/header/header.actions"
export const initializePage = (dispatch) => {
    dispatch(setIsShowMenu(false));
    dispatch(setIsShowSearch(false));
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
        default:
            return styles.color_darkgreen;
    }
}