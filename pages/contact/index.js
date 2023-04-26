import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HeroHomeSection from '../../components/BlocSectionComponent/BlocSectionManager/HeroHomeSection/HeroHomeSection';
import { initializePage } from '../../utils/global.utils';

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import styles from './contact.module.scss';
import BlocSectionManager from '../../components/BlocSectionComponent/BlocSectionManager/BlocSectionManager';
import Seo from '../../components/Seo/Seo';


export default function Index(props) {

    const {seo, content}= props.pageData;
    const generalSettings = props.generalSettings;
    const dispatch = useDispatch();




    /**
   * Initializing of the page
   */
    useEffect(() => {
      initializePage(dispatch, generalSettings);
    },[]);
  return (
    <>
    <Seo seoData={seo} />
    <div className={styles.global_container}>
        <BlocSectionManager forParcours={true} content={content} gsap={gsap}/>
    </div>
    </>
  )
}

export async function  getStaticProps() {
    const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/contactpage", {
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
      revalidate: 10, // rechargement toutes les 10s
    };
  }
