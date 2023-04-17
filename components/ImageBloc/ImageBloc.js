import Image from 'next/image';
import React from 'react';
import styles from './ImageBloc.module.scss';
import {motion, useScroll, useTransform} from 'framer-motion';
export default function ImageBloc({image, ...otherProps}) {

    const {url, alt} = image || {url: null, alt: null};
    const is_svg = () => {
      var isValid = /\.svg$/i.test(url);
      if (!isValid) {
        return false
      }
      return true;
    }

  return (
        <div 

        className={styles.image_wrapper}>
          {image && url &&
            is_svg() ? 
            
            <img
                className={[styles.image, styles.svg].join(" ")}
                src={url}
                alt={alt.toString()}
                {...otherProps}
                />

                    :     
            <Image
            className={styles.image}
            src={url}
            alt={alt.toString()}
         
            fill
        
            {...otherProps}
            />
          }
        </div>
  )
}
