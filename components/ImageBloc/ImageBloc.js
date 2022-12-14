import Image from 'next/image';
import React from 'react';
import styles from './ImageBloc.module.scss';
export default function ImageBloc({image}) {
    const {url, alt} = image;
  return (
        <div className={styles.image_wrapper}>
          {url &&
            <Image
                className={styles.image}
                src={url}
                alt={alt}
                fill
                />
          }
        </div>
  )
}