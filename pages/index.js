import Head from 'next/head'
import Image from 'next/image'
import BlocSection from '../components/BlocSectionComponent/BlocSection/BlocSection'
import BlocSectionManager from '../components/BlocSectionComponent/BlocSectionManager/BlocSectionManager'
import styles from '../styles/Home.module.scss'

export default function Home(props) {
  const {seo, content }= props.homeData; 
  
  return (
    <div>
      <Head>
        <title>{seo.title_seo}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seo.meta_description_seo} />
      </Head>
    <div className={styles.container}>
      <BlocSectionManager content = {content} />
    </div>
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