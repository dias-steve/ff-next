import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import headerReducer from './header/header.reducer';
import footerReducer from './footer/footer.reducer';


//reducers
import authMaintenaceReducer from './AuthMaintenance/authMaintenance.reducer';

export const rootReducer = combineReducers({

    auth:authMaintenaceReducer,
    header: headerReducer,
    footer: footerReducer


});

const configStorage = {
    key: 'root',
    storage,
    blacklist: ['header', 'footer'],

}

export default persistReducer(configStorage, rootReducer);