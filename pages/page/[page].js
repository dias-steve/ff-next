
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HeroHomeSection from '../../components/BlocSectionComponent/BlocSectionManager/HeroHomeSection/HeroHomeSection';
import { initializePage } from '../../utils/global.utils';

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import BlocSectionManager from '../../components/BlocSectionComponent/BlocSectionManager/BlocSectionManager';
import Head from 'next/head';
import Seo from '../../components/Seo/Seo';


export default function Page(props) {


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
    <div>
        <Seo seoData={seo}/>
       <BlocSectionManager forParcours={true} content={content} gsap={gsap}/>
    </div>
  )
}

export async function getStaticProps(context) {
    const id = context.params.page;
    const data = await fetch(
      process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/pages/" + id,
      {
        // Adding method type
        method: "GET",
  
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  
  
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
        generalSettings
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }


export async function getStaticPaths() {
    const data = await fetch(
      process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/pages"
    );
  
    const pages = await data.json();
  
    // on dit le chemin pour chaque articles
    const paths = pages.map((item) => ({
      params: { page: item.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }