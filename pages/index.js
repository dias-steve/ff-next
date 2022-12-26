import Head from 'next/head'
import Image from 'next/image'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import { useDispatch, useSelector } from "react-redux";



import BlocSectionManager from '../components/BlocSectionComponent/BlocSectionManager/BlocSectionManager'
import styles from '../styles/Home.module.scss'
import { initializePage } from '../utils/global.utils';
import { useEffect } from 'react';
import Seo from '../components/Seo/Seo';


gsap.registerPlugin(ScrollTrigger);
export default function Home(props) {
  const {seo, content }= props.homeData; 
  const generalSettings = props.generalSettings
  const dispatch = useDispatch();

  /**
   * Initializing of the page
   */
  useEffect(() => {
    initializePage(dispatch, generalSettings);
  },[])
  
  return (
    <>
      <Seo seoData={seo}/>
      <div className={styles.global_container}>
  
        <BlocSectionManager gsap={gsap} content = {content} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/homepage", {
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
  const homeData = await data.json();


  return {
    props: {
      homeData,
      generalSettings,
    },
    revalidate: 60, // rechargement toutes les 10s
  };
}