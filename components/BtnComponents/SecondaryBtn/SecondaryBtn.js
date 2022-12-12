import Link from 'next/link';
import React from 'react'
import styles from './SecondaryBtn.module.scss';


export default function SecondaryBtn({label, link}) {
    const BtnContent = () => {
        return <div className={styles.global_container}>
        <span className={styles.label} dangerouslySetInnerHTML={{__html: label}}/>
        <img className={styles.arrow_icon}
            src={'/arrow-black.svg'}
            alt={'arrow icon'}
            />
        </div>
    }
    if(link){
        return (
            <Link href={link}>
                <BtnContent />
            </Link>
          )
    }else{
        return (
            <BtnContent />
          )
    }

}
