import React from 'react';
import SecondaryBtn from '../../../BtnComponents/SecondaryBtn/SecondaryBtn';
import styles from './HomeSpeechSection.module.scss';
export default function HomeSpeechSection({content}) {

  const {title_1, paragraph_1, btn_label_1} = content;

  return (
    <div className={styles.global_container}>
      <div className={styles.global_content}>
        <h1 className= {styles.title} dangerouslySetInnerHTML={{__html:title_1}}/>
        <div className= {styles.paragraph} dangerouslySetInnerHTML={{__html:paragraph_1}}/>
        {btn_label_1 && btn_label_1 !== ""}
        <div className={styles.btn_wrapper}>
          <SecondaryBtn label={btn_label_1} link={'/about'} />
        </div>

      </div>
    </div>
  )
}


