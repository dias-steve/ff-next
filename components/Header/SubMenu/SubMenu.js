import React from 'react';
import Link from 'next/link';

import PrimaryBtn from '../../BtnComponents/PrimaryBtn/PrimaryBtn';

import styles from './SubMenu.module.scss';

export const SubBtn = ({link, label}) => {
    return (
        <Link href={link}>
            <div className={styles.sub_btn_global_container}>
                <span className={styles.sub_btn_label} dangerouslySetInnerHTML= {{__html: label}} />
            </div>
        </Link>
    )
}


export default function SubMenu() {
  return (
    <div className={styles.global_container}>
        <div className={styles.sub_second_btn_wrapper}>
            <SubBtn label= {'Nos Parcours'} link={'/parcours'}/>
            <SubBtn label={'Nous contacter'} link={'/contact'} />
        </div>

        <div className={styles.primarybtn_wrapper}>
            <PrimaryBtn 
                label={'Prendre un RDV'}
                colorLabel='white'
                colorBackgroud ='orange'
                link='https://google.fr/'
                onHeader={true}
            />
        </div>

    </div>
  )
}
