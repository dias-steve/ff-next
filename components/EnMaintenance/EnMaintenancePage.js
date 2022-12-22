import React from 'react';
import styles from './EnMaintenancePage.module.scss';
import ImageBloc from '../ImageBloc/ImageBloc'
import Head from 'next/head';

export default function EnMaintenancePage({ maintenanceData,generalSettings}) {

    const {maintenance_message, maintenance_thumbnail} = maintenanceData;
  return (
    <>
    <Head>
        <title>Fréquence Femme</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content='Fréquence Femme' />
    </Head>
    <div className={styles.global_container}>
      <div className={styles.image_wrapper}>
        <ImageBloc image={maintenance_thumbnail} />
      </div>

      <div className={styles.paragraph_container}>
        <img className={styles.logo} src={'/logo-white.svg'}  alt={'logo'}/>
        <h1 className={styles.title} dangerouslySetInnerHTML={{__html:maintenance_message}}/>
      </div>
    </div>
    </>
  )
}
