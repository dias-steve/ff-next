import React from 'react'
import ImageBloc from '../../../ImageBloc/ImageBloc';
import styles from './HomeParagraph1Section.module.scss';
import {motion, useScroll, useTransform} from 'framer-motion';
import { colorConverterCSS } from '../../../../utils/global.utils';
export default function HomeParagraph1Section({content}) {
  const {title_1, paragraph_1, image_1, image_2, title_3, paragraph_2, background_color, id_css} = content
  let {scrollYProgress} = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ["-30%", "30%"])


  const optionsSection = {id: id_css} || {};
  return (
    <div {...optionsSection} className={[styles.global_container, background_color ? colorConverterCSS(background_color,styles): styles.color_brown].join(" ")}>
    <div className= {styles.global_content}>

      <div className={styles.paragraph_1_section}>

      <div className={styles.paragraph_1_container}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title_1}}/>
          <div className={[styles.paragraph_1, styles.paragraph].join(" ")}  dangerouslySetInnerHTML={{__html: paragraph_1}}/>
        </div>
        <motion.div style= {{ y}}  className={styles.image_1_container}>
          <ImageBloc image={image_1}/>
        </motion.div>
      </div>

    { paragraph_2 && paragraph_2 !== "" && paragraph_2 !==" " &&
      <div className={[styles.paragraph_1_section, styles.paragraph_2_section].join(" ")}>
      <motion.div style= {{ y}} className={[styles.image_1_container , styles.image_2_container].join(" ")}>
          <ImageBloc image={image_2}/>
        </motion.div>
      <div className={[styles.paragraph_1_container,  styles.paragraph_2_container].join(" ")}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title_3}}/>
          <div className={[styles.paragraph_1, styles.paragraph].join(" ")}  dangerouslySetInnerHTML={{__html: paragraph_2}}/>
        </div>

      </div>
      }

    </div>
    </div>
  )
}
