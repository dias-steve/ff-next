import React from 'react';
import PrimaryBtn from '../../../BtnComponents/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '../../../BtnComponents/SecondaryBtn/SecondaryBtn';
import ImageBloc from '../../../ImageBloc/ImageBloc';
import styles from './HomeConclusionParagraph.module.scss';
export default function HomeConclusionParagraph({content}) {

  const {title_1, paragraph_1, image_1, btn_label_1, btn_label_2} = content
  console.log(content);

  return (
    <div className={styles.global_container}>
    <div className= {styles.global_content}>

      <div className={styles.paragraph_1_section}>

        <div className={styles.paragraph_1_container}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title_1}}/>
          <div className={[styles.paragraph_1, styles.paragraph].join(" ")}  dangerouslySetInnerHTML={{__html: paragraph_1}}/>
          <div className={styles.btn_primary_wrapper}>
            <PrimaryBtn label={btn_label_1} link={'/'} colorLabel={'orange'}/>
          </div>
          <div className={styles.btn_primary_wrapper}>
          <PrimaryBtn label={btn_label_2} link={'/'} colorBackgroud={'orange'} colorLabel={'white'} withBorder = {true}/>
          </div>
        </div>
        <div className={styles.image_1_container}>
         
            <ImageBloc image={image_1}/>
          
        </div>

      </div>


    
    </div>
    </div>
  )
}
