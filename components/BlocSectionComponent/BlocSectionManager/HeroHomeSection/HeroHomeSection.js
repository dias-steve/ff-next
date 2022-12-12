import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SecondaryBtn from '../../../BtnComponents/SecondaryBtn/SecondaryBtn';

import styles from './HeroHomeSection.module.scss'

export default function HeroHomeSection({content}) {

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
        paragraph_1,
        title_3
    
    } = content; 
    console.log(content);
  return (
    <div className={styles.global_container}>
    
        <div className={styles.global_content}>
            <div className={[styles.grid_container, styles.big_image_containter].join(" ")}>
                {image_1 && image_1?.url &&
                <div
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
            <div className={[styles.grid_container, styles.title_container].join(" ")}>
                <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title_1}}/>    
            </div>
            <div className={[styles.grid_container, styles.decription_container].join(" ")}>
                <Link className={styles.link} href={'https://www.google.fr'}>
                <h2 className={styles.description_title} dangerouslySetInnerHTML={{__html: title_3}}/> 
                <p className={styles.description_paragraph} dangerouslySetInnerHTML={{__html:paragraph_1}}/>
     
                <BtnContent 
                    label={btn_label_1 ? btn_label_1 : 'En savoir plus' }
                />
                </Link>
            </div>
            <div className={[styles.grid_container, styles.tiny_image_container].join(" ")}>
            {image_2 && image_1?.url &&
                <div className={styles.image_wrapper}>
                    <Image 
                        className={styles.image}
                        src={image_2.url}
                        alt={image_2.alt}
                        fill
                        />
                </div>
            }
            </div>
        </div>
 
    </div>
  )
}
