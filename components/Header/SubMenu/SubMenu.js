import React from 'react';
import Link from 'next/link';

import PrimaryBtn from '../../BtnComponents/PrimaryBtn/PrimaryBtn';

import styles from './SubMenu.module.scss';

export const SubBtn = ({link, label}) => {
    const options = link.startsWith('http') ? {target:'_blank'} : {}
    return (
        <Link {...options} href={link}>
            <div className={styles.sub_btn_global_container}>
                <span className={styles.sub_btn_label} dangerouslySetInnerHTML= {{__html: label}} />
            </div>
        </Link>
    )
}


export default function SubMenu({menuItemsList}) {

    
  return (
    <div className={styles.global_container}>
        <div className={styles.sub_second_btn_wrapper}>
            {
                menuItemsList && Array.isArray(menuItemsList) && menuItemsList.length > 0 &&
                menuItemsList
                    .slice(0, 3)
                    .map(menuItem => <SubBtn label={menuItem.name} link={menuItem.link} />)
            }

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
