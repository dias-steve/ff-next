import React, { useEffect, useRef } from 'react';
import SecondaryBtn from '../../../BtnComponents/SecondaryBtn/SecondaryBtn';
import styles from './HomeSpeechSection.module.scss';
export default function HomeSpeechSection({content, gsap}) {

  const {title_1, paragraph_1, btn_label_1, btn_1_link, id_css} = content;
  const optionsSection = {id: id_css} || {};
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  useEffect(() => {
    const elTitle = titleRef.current;
    const elparagraph   = paragraphRef.current;
    gsap.timeline(       
        {scrollTrigger:{
          trigger: elTitle,
          start: "start 80%",
          end: "50% 50%",
          toggleActions: "restart none reverse none",

    
          
      }}).fromTo( elTitle,
        {
          duration: 0.3,
          opacity: 0,
          stagger: 0.5,
          delay: 0.2

  
        },        {
          duration: 0.3,
          opacity: 1,
    
  
        }).fromTo( elparagraph,
            {
                opacity: 0,

      
            },        {
                opacity: 1,
      
            })

  }, [])

  return (
    <div {...optionsSection} className={styles.global_container}>
      <div className={styles.global_content}>
        <h1 ref= {titleRef} className= {styles.title} dangerouslySetInnerHTML={{__html:title_1}}/>
        <div ref= {paragraphRef} className= {styles.paragraph} dangerouslySetInnerHTML={{__html:paragraph_1}}/>
        {btn_label_1 && btn_label_1 !== ""}
        {btn_1_link && btn_1_link !=="" && btn_1_link !==" "&&
          <div className={styles.btn_wrapper}>
            <SecondaryBtn label={btn_label_1} link={btn_1_link} />
          </div>
        }

      </div>
    </div>
  )
}


