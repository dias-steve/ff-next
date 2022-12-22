import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import SecondaryBtn from '../../../BtnComponents/SecondaryBtn/SecondaryBtn';

import styles from './HeroHomeSection.module.scss'

export default function HeroHomeSection({content, gsap, forParcours}) {

    const BtnContent = ({label}) => {
        return <div className={styles.btn_global_container}>
        <span className={styles.label} dangerouslySetInnerHTML={{__html: label}}/>
        <img className={styles.arrow_icon}
            src={'/arrow-black.svg'}
            alt={'arrow icon'}
            />
        </div>
    }
    const { 
        title_1,
        image_1,
        image_2,
        btn_label_1,
        btn_1_link,
        paragraph_1,
        title_3,
        id_css
    
    } = content; 

    const optionsLink = btn_1_link?.startsWith('http') ? {target:'_blank'} : {}
    const optionsSection = {id: id_css} || {};

    /**Annimation */
    const imageRef = useRef(null);
    const imageRef2 = useRef(null);
    const descriptionBlocRef = useRef(null);
    useEffect(() => {
      const elImage = imageRef.current;
      const elImage2 = imageRef2.current;
      const eldescriptionBlock = descriptionBlocRef.current;

  
      gsap.timeline(       
        {scrollTrigger:{
          trigger: elImage,
          start: "top 40%",
          end: "buttom 50%",
          toggleActions: "restart none reverse none",
   
      }}).fromTo( elImage,
        {
          x:"100%",
          opacity:0
  
        },{
          x:0,
          opacity:1
   }
  
      ).fromTo(elImage2,{
        x:"-100%",
        opacity:0
      },{
       x:0,
       opacity:1
     
      }, '-=0.5')
      .fromTo(eldescriptionBlock,
        {
        y:"0",

    },{
     y:0
    },  '-=0.5')
    }, [])

  return (
    <div {...optionsSection} className={styles.global_container}>
    
        <div className={[styles.global_content, forParcours ? styles.forParcours : styles.notForParcours].join(" ")}>
            <div className={[styles.grid_container, styles.big_image_containter, forParcours ? styles.forParcours : styles.notForParcours].join(" ")}>
                {image_1 && image_1?.url &&
                <div
                ref= {imageRef}
                className={styles.image_wrapper}>
                    <Image 
                        className={styles.image}
                        src={image_1.url}
                        alt={image_1.alt}
                        fill
                        />
                </div>
                }
            </div>
            <div className={[styles.grid_container, styles.title_container, forParcours ? styles.forParcours : styles.notForParcours].join(" ")}>
                <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title_1}}/> 
                {forParcours &&
                     <p className={styles.description_paragraph} dangerouslySetInnerHTML={{__html:paragraph_1}}/>
                }   
            </div>
            {!forParcours &&
            <>
            {  btn_1_link &&  btn_1_link!== "" &&  btn_1_link!== " " &&
            <div ref ={descriptionBlocRef} className={[styles.grid_container, styles.decription_container].join(" ")}>
                <Link {...optionsLink} className={styles.link} href={btn_1_link}>
                <h2 className={styles.description_title} dangerouslySetInnerHTML={{__html: title_3}}/> 
                <p className={styles.description_paragraph} dangerouslySetInnerHTML={{__html:paragraph_1}}/>
     
                <BtnContent 
                    label={btn_label_1 ? btn_label_1 : 'En savoir plus' }
                />
                </Link>
            </div>
            }
            
            <div className={[styles.grid_container, styles.tiny_image_container, forParcours ? styles.forParcours : styles.notForParcours].join(" ")}>
            {image_2 && image_1?.url &&
                <div ref= {imageRef2} className={styles.image_wrapper}>
                    <Image 
                        className={styles.image}
                        src={image_2.url}
                        alt={image_2.alt}
                        fill
                        />
                </div>
            }
            </div>
            </>
            }

        </div>
 
    </div>
  )
}
