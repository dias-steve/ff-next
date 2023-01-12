import React, { useEffect, useRef } from 'react';
import PrimaryBtn from '../../../BtnComponents/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '../../../BtnComponents/SecondaryBtn/SecondaryBtn';
import ImageBloc from '../../../ImageBloc/ImageBloc';
import styles from './HomeConclusionParagraph.module.scss';


export function Comp({Componant}){

  return (
    <Componant label={'testing'}/>
  )
}

export function TestC ({label}){
  return (<div><p>:::{label}</p></div>)
}
export default function HomeConclusionParagraph({content, gsap}) {

  const {title_1, paragraph_1, image_1, btn_label_1, btn_label_2, btn_2_link, btn_1_link, id_css} = content

  /** Annimation */
  const imageRef = useRef(null);
  useEffect(() => {
    const elImage = imageRef.current;


    gsap.timeline(       
      {scrollTrigger:{
        trigger: elImage,
        start: "top 40%",
        end: "buttom 50%",
        toggleActions: "restart none reverse none",
        //markers: true
    }}).fromTo( elImage,
      {
        x:"100%",

      },{
        x:0,
 }

    ).to(elImage,{
  
    }, '-=0.5')
  }, [])

  const optionsSection = {id: id_css} || {};
  return (
    <div {...optionsSection} className={styles.global_container}>
    <div className= {styles.global_content}>

      <div className={styles.paragraph_1_section}>

        <div className={styles.paragraph_1_container}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{__html: title_1}}/>
          <div className={[styles.paragraph_1, styles.paragraph].join(" ")}  dangerouslySetInnerHTML={{__html: paragraph_1}}/>
          
          { btn_1_link && btn_1_link !== "" && btn_1_link !== " "&&
          <div className={styles.btn_primary_wrapper}>
            <PrimaryBtn label={btn_label_1} link={btn_1_link} colorLabel={'orange'}/>
          </div>
          }
          { btn_2_link && btn_2_link !== "" && btn_2_link !== " "&&
            <div className={styles.btn_primary_wrapper}>
            <PrimaryBtn label={btn_label_2} link={btn_2_link} colorBackgroud={'orange'} colorLabel={'white'} withBorder = {true}/>
            <Comp Componant={TestC} />
            </div>
          }
        </div>
        <div ref={imageRef} className={styles.image_1_container}>
         
          
            <ImageBloc image={image_1}/>
      
          
        </div>

      </div>


    
    </div>
    </div>
  )
}
