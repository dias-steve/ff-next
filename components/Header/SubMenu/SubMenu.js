import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

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


export default function SubMenu({menuItemsList, menuOrange}) {

    console.log(menuOrange);
  return (
    <div className={styles.global_container}>
        <div className={styles.sub_second_btn_wrapper}>
            {
                menuItemsList && Array.isArray(menuItemsList) && menuItemsList.length > 0 &&
                menuItemsList
                    .slice(0, 3)
                    .map(menuItem => <SubBtn key={uuidv4()} label={menuItem.name} link={menuItem.link} />)
            }

        </div>


        {menuOrange && Array.isArray(menuOrange) && menuOrange.length > 0 && menuOrange[0].link !== "" && menuOrange[0].link !== " "&& 
                    <div className={styles.primarybtn_wrapper}>
                    <PrimaryBtn 
                        label={menuOrange[0].name}
                        colorLabel='white'
                        colorBackgroud ='orange'
                        link={menuOrange[0].link}
                        onHeader={true}
                    />
                </div>
        }


    </div>
  )
}
