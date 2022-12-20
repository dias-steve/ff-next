import React from 'react'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import EnMaintenancePage from "../EnMaintenance/EnMaintenancePage";
import { useDispatch, useSelector } from "react-redux";
const mapState = (state) => ({
  auth: state.auth.auth,
});

export default function Container(props) {
  const generalSettings = props.children.props.generalSettings;
  const maintenanceMode = generalSettings
    ? generalSettings.maintenance_mode
    : false;

  const { auth } = useSelector(mapState);

  const isAccessAllowed = () => {
    if (maintenanceMode?.is_activated) {
      if (auth.is_auth) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
  return (
   <>
      {!isAccessAllowed() ? (
        <EnMaintenancePage
          maintenanceData={maintenanceMode}
          generalSettings={generalSettings}
        />
      ) : (
        <>
          <Header/>
            {props.children}
          <Footer logo={{url:'/logo-dark-green.svg', alt:'Logo'}}/>
        </>
      )}
   </>
  )
}
