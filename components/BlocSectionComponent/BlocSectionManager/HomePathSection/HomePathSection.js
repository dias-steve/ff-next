import React, { useEffect, useRef } from 'react';
import styles from './HomePathSection.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ImageBloc from '../../../ImageBloc/ImageBloc';
import Link from 'next/link';
import useDeviceDetect,{ getWitdthScreen } from "../../../../hooks/useDeviceDectect";

export const PathCard = ({contentData, gsap}) => {
  const {id, thumbnail, content,title, step_number} = contentData;

  /**Anniamtion */
  const backgroundRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);
  const widthScreen = getWitdthScreen();
  const isMobile =  widthScreen <= 700 ? true : false;

  useEffect(() => {
    const elBackground = backgroundRef.current;
    const elnumber = numberRef.current;
    const elimage = imageRef.current;
    if(isMobile){
      gsap.timeline(       
        {scrollTrigger:{
          trigger: elBackground,
          start: "top 60%",
          end: "30% 50%",
          toggleActions: "restart none reverse none",

          
      }}).to( elBackground,
        {
          duration: 0.3,
          opacity: 0,
     
  
        },
      ).to(elnumber,
      {
      color:"#FE7C58"
      }
      ,'-=0.5').to(elimage,
        {scale: 1.2}
        ,'-=0.5')
    }else{
      gsap.timeline(       
        {scrollTrigger:{
          trigger: elBackground,
          start: "-40% 80%",
          end: "20% 50%",
          toggleActions: "restart none reverse none",
    
          
      }}).fromTo( elBackground,
        {
          duration: 0.3,
          opacity: 0.9,
          stagger: 0.5,
          delay: 0.2
  
        },        {
          duration: 0.3,
          opacity: 0.6,
  
        },
      ).fromTo(elnumber,
      {
        opacity: 0.3
      },
      {
        opacity:1
        }
      ,'-=0.5').fromTo(elimage,
        {scale: 1.2,
          delay: 0.2
        },
        {scale: 1}
        ,'-=0.5')
    }
 
  }, [])

  return (<Link href={'/parcours#step'+step_number} className={styles.pathcard_global_container}>
    <div ref= {imageRef} className={styles.image_wrapper}>
      <ImageBloc image={thumbnail} />
    </div>

    <div className={styles.content_container}>
      <div ref = { backgroundRef} className={styles.background}/>
      <span ref= {numberRef} className={styles.number}>0{step_number}</span>
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

export default function HomePathSection({content, gsap}) {
  const {step_list, btn_label_1, btn_1_link, id_css} = content;
  const optionsLink = btn_1_link?.startsWith('http') ? {target:'_blank'} : {}
  const optionsSection = {id: id_css} || {};

  return (
    <div  {...optionsSection}className={styles.global_container}>
      <div className={styles.global_content}>
        {step_list && Array.isArray(step_list) && step_list.length > 0 &&
        <>
          {step_list.map(step => {
         
            return (
            <div className={[styles.tuile_container].join( " ")}  key= {uuidv4()}>
              <PathCard gsap={ gsap} contentData={step}/>
            </div>)
          })}

            <div className={[styles.tuile_container, styles.tuile_btn].join( " ")}  key= {uuidv4()}>
              {btn_1_link && btn_1_link !== "" && btn_1_link!== " " &&
                <Link {...optionsLink} href = {'/parcours'} className={styles.btn_more_wrapper}>
                  <BtnContent label={btn_label_1}/>
                </Link>
              }
            </div>
          </>
        }
      </div>
    </div>
  )
}

