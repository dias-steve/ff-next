import React from 'react';
import PrimaryBtn from '../../../BtnComponents/PrimaryBtn/PrimaryBtn';
import ImageBloc from '../../../ImageBloc/ImageBloc';
import styles from './ContactBloc.module.scss';

export default function ContactBloc({content, gsap}) {
  console.log(content);
  const {image_1,title_1, paragraph_1 ,contact_details:{phone_number, whatapp_number, appointement_url, address, email}} = content;
  return (
    <div className={styles.global_container}>
      <div className={styles.global_content}>
        <div className={styles.image_wrapper}>
          <ImageBloc image={image_1}/>
        </div>
        <div className={styles.paragraph_container}>

          <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title_1}}/>
          <p className={styles.paragraph} dangerouslySetInnerHTML={{__html:paragraph_1}}/>

          <div className={styles.btn_wrapper}>


          { whatapp_number && whatapp_number !== "" &&

            <div className={styles.item_btn_wrapper}>
            <PrimaryBtn 
            label={'WhatApp'}
            colorLabel='blue'
            link={'https://wa.me/'+whatapp_number+'?text=Bonjour'}
            target='_blank'
            />
            </div>
          }

          { phone_number && phone_number !== "" &&
          <div className={styles.item_btn_wrapper}>
            <PrimaryBtn 
            label={'Tel: '+phone_number}
            colorLabel='blue'
            link={'tel:'+phone_number+'?text=Bonjour'}
            externalLink={true}
            target='_blank'
            />
            </div>
          }

        { email && email !== "" &&
        <div className={styles.item_btn_wrapper}>
            <PrimaryBtn 
            label={'Email: '+email}
            colorLabel='blue'
            link={'mailto:'+email+'?text=Bonjour'}
            externalLink={true}
            target='_blank'
            />
            </div>
          }


        { appointement_url && appointement_url !== "" &&
        <div className={styles.item_btn_wrapper}>
            <PrimaryBtn 
            label={'appointement_url: '+appointement_url}
            colorLabel='blue'
            link={appointement_url}
            externalLink={true}
            target='_blank'
            />
            </div>
          }
              
              
        </div>
        { address && address !== "" &&
          <div className={styles.address_container}>
          <h2 className={styles.title_address}> Adresse postale</h2>
          <span className={styles.address} dangerouslySetInnerHTML={{__html:address}}/>
          </div>
          }
   
        </div>
      </div>
    </div>
  )
}