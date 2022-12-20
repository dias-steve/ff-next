import React from 'react'
import styles from './PathDetailled.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ImageBloc from '../../../ImageBloc/ImageBloc';

const SingleStep = ({data}) => {
  const {title,step_number, thumbnail, content} = data;


  return (
  <div className={styles.single_step_container} id={'step'+step_number}>
  <div className={[styles.image_container].join(" ")}>
    <span className={styles.step_number}>0{step_number}</span>
    <div className={styles.image_wrapper}>
      <ImageBloc image={thumbnail}/>
    </div>
  </div>
  <div className={[styles.paragraph_container].join(" ")}>
    <h2 className={[styles.title]} dangerouslySetInnerHTML={{__html: title}}/>
    <div className={[styles.paragraph]} dangerouslySetInnerHTML={{__html: content}}/>
  </div>
  </div>)
}
export default function PathDetailled({content}) {
 
  const {step_list, id_css} = content;
  const optionsSection = {id: id_css} || {};
  return (
    <div  {...optionsSection} className={styles.global_container}>
        <div className={styles.global_content}>
        {step_list && Array.isArray(step_list) && step_list.length > 0 &&
          step_list.map(step => <SingleStep key={uuidv4()} data={step}/>)
        }
      </div>
    </div>
  )
}
