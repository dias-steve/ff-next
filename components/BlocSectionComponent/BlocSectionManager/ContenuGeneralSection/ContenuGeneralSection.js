import React from 'react'
import styles from './ContenuGeneralSection.module.scss';
export default function ContenuGeneralSection({content}) {
    const {paragraph_1, title_1} = content;
  return (
    <>
    <div className={styles.global_container_title}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{__html:title_1}}/>
    </div>
    <div className={styles.global_container_paragraph}>
        <div className={styles.paragraph} dangerouslySetInnerHTML={{__html:paragraph_1}}/>
    </div>
    </>
  
  );
}
