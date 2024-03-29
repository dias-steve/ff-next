import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import styles from "./Footer.module.scss";
import { useDispatch, useSelector } from "react-redux";


const FooterItem = ({ data }) => {
  const { link, name } = data;
  let options = link.startsWith('http') ? {target:'_blank'} : {}

  
  return (

      <Link href={link} {...options} className={styles.item_btn_global_container}>
      <span
        dangerouslySetInnerHTML={{ __html: name }}
        className={styles.name}
      />

    </Link>
  );
};

const SectionLink = ({ data }) => {
  const { name, childrens } = data;

  return (
    <div className={styles.section_global_container}>
      <h2
        className={styles.section_title}
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <ul className={styles.section_list_container}>
        {childrens &&
          Array.isArray(childrens) &&
          childrens.length > 0 &&
          childrens.map((item) => (
            <li key={uuidv4()}>
              {" "}
              <FooterItem data={item} />{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({
  footerData: state.footer,
});

export default function Footer({logo}) {
  const { footerData } = useSelector(mapState);
  const { footer_menu_list, copyright } = footerData;

  return (
    <div className={styles.global_container}>
      <div className={styles.global_content}>
        <div className={[styles.section_wrapper].join(" ")}>
          {logo?.url &&
          <Link href={'/'}>
          <img
            src={logo.url}
            alt={logo.alt}
            className={styles.image}
            key={uuidv4()}
          />
          </Link>
          }
        </div>
        {footer_menu_list && footer_menu_list.footer_social_sec && (
        <div className={[styles.section_wrapper].join(" ")}>

            <SectionLink data={footer_menu_list.footer_social_sec} />
    
        </div>
              )}

      {footer_menu_list && footer_menu_list.footer_legal_sec && (
        <div className={[styles.section_wrapper].join(" ")}>
       
            <SectionLink data={footer_menu_list.footer_legal_sec} />
  
        </div>
                )}
      {footer_menu_list && footer_menu_list.footer_aide_sec && (
        <div className={[styles.section_wrapper].join(" ")}>
         
            <SectionLink data={footer_menu_list.footer_aide_sec} />
     
        </div>
             )}
      </div>

      <div><span className={styles.copyright} dangerouslySetInnerHTML={{__html:copyright}}/></div>
    </div>
  );
}
