import React, {useEffect, useRef} from 'react';
import styles from './HomeReviewSection.module.scss';
import ImageBloc from './../../../ImageBloc/ImageBloc.js';
import { v4 as uuidv4 } from 'uuid';
import useDeviceDetect,{ getWitdthScreen } from "../../../../hooks/useDeviceDectect";

export const SingleReview = ({image, name, paragraph}) => {

    return (
        <div className={styles.single_review_global_container}>
            <div className={styles.image_wrapper}>
                <ImageBloc image={image}/>
            </div>
            <p className={styles.paragraph} dangerouslySetInnerHTML={{__html: paragraph}}/>
            <span className={styles.name} dangerouslySetInnerHTML={{__html: name}}/>
        </div>
    )
}
export default function HomeReviewSection({content, gsap}) {
    const { title_2, reviews_list} = content;
    const nbReviews =  reviews_list && Array.isArray(reviews_list) ? reviews_list.length : 0;

    const height_list = nbReviews*550;
    const x = (nbReviews*262)-50;

    const styles_list = {
        height: height_list
    }

    /**Anniamtion */
    const trackWrapperRef = useRef(null);
    const listContainerRef = useRef(null);
    const globalContainerRef = useRef(null);
    const titleRef = useRef(null);

    
    
    const widthScreen = getWitdthScreen();
    const isMobile =  widthScreen <= 700 ? true : false;
    useEffect(()=> {

        const eltrackWrapper   = trackWrapperRef.current;
        const ellistContainer = listContainerRef.current;
        const elglobalContainerRef = globalContainerRef.current;
   
        gsap
        .to(eltrackWrapper ,
          {        
            

            ease: "none", 
            x: "-"+x,
      
         
            scrollTrigger:{
                trigger:eltrackWrapper ,

                scrub: 0.1,
              start: 'center center',
              end: "center -30%",
           
              toggleActions: "restart none none none",
                
    
          
               
              
            }
     
        })
      },[])

      useEffect(() => {
        if(!isMobile){
        const elTitle = titleRef.current;
        const eltrackWrapper   = trackWrapperRef.current;
        gsap.timeline(       
            {scrollTrigger:{
              trigger: elTitle,
              start: "start 80%",
              end: "50% 50%",
              toggleActions: "restart none reverse none",
    
        
              
          }}).fromTo( elTitle,
            {
              duration: 0.3,
              opacity: 0,
              stagger: 0.5,
              delay: 0.2

      
            },        {
              duration: 0.3,
              opacity: 1,
        
      
            }).fromTo( eltrackWrapper,
                {
                    opacity: 0,
    
          
                },        {
                    opacity: 1,
          
                })
            }

      }, [])
    

  return (
    <div ref={globalContainerRef}  className={styles.global_container}>
        <div style={styles_list} className={styles.global_content}>

            <div  ref={titleRef}  className={styles.title} dangerouslySetInnerHTML={{__html: title_2}}/>

            <div ref={listContainerRef}  className={styles.reviews_list_container}>
                <div ref={trackWrapperRef} className={styles.reviews_list_tracks}>
                    { reviews_list && Array.isArray(reviews_list) && reviews_list.length > 0 &&
                        reviews_list.map( review => (
                            <SingleReview 
                                key={uuidv4()}
                                name={review.title}
                                image = {review.thumbnail}
                                paragraph = {review.content}/>                        
                            ))
                    }
                </div>
            </div>
        </div>


    </div>
  )
}
