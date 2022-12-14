import React from 'react';
import styles from './HomeSpeechSection.module.scss';
export default function HomeSpeechSection({content, homeData}) {
    console.log(homeData);
  return (
    <div className={styles.global_container}>
      test
    </div>
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