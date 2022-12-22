import Image from 'next/image';
import React from 'react';
import styles from './ImageBloc.module.scss';
import {motion, useScroll, useTransform} from 'framer-motion';
export default function ImageBloc({image}) {

    const {url, alt} = image || {url: null, alt: null};
  return (
        <div 

        className={styles.image_wrapper}>
          {image && url &&
            <Image
                className={styles.image}
                src={url}
                alt={alt.toString()}
                fill
                />
          }
        </div>
  )
}
