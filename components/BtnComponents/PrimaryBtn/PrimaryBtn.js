import React from 'react';
import styles from './PrimaryBtn.module.scss';
import { colorConverterCSS } from '../../../utils/global.utils';
import Link from 'next/link';

export default function PrimaryBtn({label, link,  colorBackgroud, colorLabel, onHeader, withBorder, onClick, ...otherProps}) {

if( link ){
    const options = link.startsWith('http') ? {target:'_blank'} : {}
   return (
   <Link {...otherProps}  href={link}>
        <div className={[styles.global_container, colorConverterCSS(colorBackgroud, styles), onHeader ? styles.on_header :  " ", withBorder ? styles.with_border : " "  ].join(" ")}
            {...otherProps}
        >
            <span className={[styles.label,colorConverterCSS(colorLabel, styles)].join(" ")}
            dangerouslySetInnerHTML= {{__html: label}}/>
            <img className={styles.arrow_icon}
                src={'/arrow-'+ ( onHeader ? 'orange' : (colorLabel? colorLabel : 'black')) +'.svg'}
                alt={'arrow icon'}
            />
        </div>
    </Link>)
}else{
    return (
        <div className={[styles.global_container, colorConverterCSS( colorBackgroud, styles)].join("")}
            {...otherProps} onClick={onClick}
        >
            <span className={[styles.label,colorConverterCSS(colorLabel, styles)].join(" ")}
            dangerouslySetInnerHTML= {{__html: label}}/>
            <img className={styles.arrow_icon}
                src={'/arrow-'+ (colorLabel? colorLabel : 'black') +'.svg'}
                alt={'arrow icon'}
            />
        </div>
      )
}

}
