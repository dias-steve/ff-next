import React from 'react'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import EnMaintenancePage from "../EnMaintenance/EnMaintenancePage";
import { useDispatch, useSelector } from "react-redux";
import PopupRGPD from '../../features/PopupRGPD/components/PopupRGPD.js';
import { useRouter } from 'next/router.js';
import LoaderPage from '../LoaderPage/LoaderPage.js';
const mapState = (state) => ({
  auth: state.auth.auth,
});

export default function Container(props) {
  const router = useRouter();
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

    {router.isFallback ? (
        <LoaderPage />
      ):(
      !isAccessAllowed() ? (
        <EnMaintenancePage
          maintenanceData={maintenanceMode}
          generalSettings={generalSettings}
        />
      ) : (
        <>
        <PopupRGPD/>
          <Header/>
            {props.children}
          <Footer logo={{url:'/logo-dark-green.svg', alt:'Logo'}}/>
        </>
      ))}
   </>
  )
}
