import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from '../../components/BtnComponents/PrimaryBtn/PrimaryBtn';

import { initializePage } from '../../utils/global.utils';


import styles from './404.module.scss';



export default function Index(props) {


    const generalSettings = props.generalSettings;
    const dispatch = useDispatch();
    






    /**
   * Initializing of the page
   */
    useEffect(() => {
      initializePage(dispatch, generalSettings);
    },[]);
  return (
    <div className={styles.global_container}>
       <span className={styles.title}>Ooops, vous êtes perdu ?</span>
       <div className ={styles.btn_wrapper}>
        <PrimaryBtn label={'Retourner à l&#39accueil'} link='/' colorLabel='blue'/>
       </div>

    </div>
  )
}

export async function getStaticProps() {
    const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/aboutpage", {
      // Adding method type
      method: "GET",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
  
  
    const generalSettingsRaw = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/settings", {
      // Adding method type
      method: "GET",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
    const generalSettings = await generalSettingsRaw.json();
    const pageData = await data.json();
  
  
    return {
      props: {
        pageData,
        generalSettings,
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }
