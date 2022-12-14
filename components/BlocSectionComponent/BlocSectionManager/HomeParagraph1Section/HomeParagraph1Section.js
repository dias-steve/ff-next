import React from 'react'
import ImageBloc from '../../../ImageBloc/ImageBloc';
import styles from './HomeParagraph1Section.module.scss';
export default function HomeParagraph1Section({content}) {
  const {title_1, paragraph_1, image_1, image_2, title_3, paragraph_2,} = content

  return (
    <div className={styles.global_container}>
    <div className= {styles.global_content}>

      <div className={styles.paragraph_1_section}>

      <div className={styles.paragraph_1_container}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title_1}}/>
          <div className={[styles.paragraph_1, styles.paragraph].join(" ")}  dangerouslySetInnerHTML={{__html: paragraph_1}}/>
        </div>
        <div className={styles.image_1_container}>
          <ImageBloc image={image_1}/>
        </div>
      </div>


      <div className={[styles.paragraph_1_section, styles.paragraph_2_section].join(" ")}>
      <div className={[styles.image_1_container , styles.image_2_container].join(" ")}>
          <ImageBloc image={image_2}/>
        </div>
      <div className={[styles.paragraph_1_container,  styles.paragraph_2_container].join(" ")}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title_3}}/>
          <div className={[styles.paragraph_1, styles.paragraph].join(" ")}  dangerouslySetInnerHTML={{__html: paragraph_2}}/>
        </div>

      </div>

    </div>
    </div>
  )
}
