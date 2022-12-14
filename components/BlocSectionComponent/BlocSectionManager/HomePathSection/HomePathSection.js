import React from 'react';
import styles from './HomePathSection.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ImageBloc from '../../../ImageBloc/ImageBloc';
import Link from 'next/link';


export const PathCard = ({contentData}) => {
  const {id, thumbnail, content,title, step_number} = contentData;

  return (<Link href={'/parcours/#step'+step_number} className={styles.pathcard_global_container}>
    <div className={styles.image_wrapper}>
      <ImageBloc image={thumbnail} />
    </div>

    <div className={styles.content_container}>
      <div className={styles.background}/>
      <span className={styles.number}>0{step_number}</span>
      <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title}}/>
    </div>

  </Link>)
}

const BtnContent = ({label}) => {
  return <div className={styles.btn_global_container}>
  <span className={styles.label} dangerouslySetInnerHTML={{__html: label}}/>
  <img className={styles.arrow_icon}
      src={'/arrow-black.svg'}
      alt={'arrow icon'}
      />
  </div>
}

export default function HomePathSection({content}) {
  const {step_list, btn_label_1} = content;


  return (
    <div className={styles.global_container}>
      <div className={styles.global_content}>
        {step_list && Array.isArray(step_list) && step_list.length > 0 &&
        <>
          {step_list.map(step => {
         
            return (
            <div className={[styles.tuile_container].join( " ")}  key= {uuidv4()}>
              <PathCard contentData={step}/>
            </div>)
          })}

            <div className={[styles.tuile_container, styles.tuile_btn].join( " ")}  key= {uuidv4()}>
              <Link href = {'/'} className={styles.btn_more_wrapper}>
                <BtnContent label={'En savoir sur <br/>les parcours'}/>
              </Link>
            </div>
          </>
        }
      </div>
    </div>
  )
}

