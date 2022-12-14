import React from 'react';
import styles from './HomeReviewSection.module.scss';
import ImageBloc from './../../../ImageBloc/ImageBloc.js';



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
export default function HomeReviewSection({content}) {
    const { title_2, reviews_list} = content;
    console.log(reviews_list);
  return (
    <div className={styles.global_container}>
        <div className={styles.global_content}>

            <div className={styles.title} dangerouslySetInnerHTML={{__html: title_2}}/>

            <div className={styles.reviews_list_container}>
                <div className={styles.reviews_list_tracks}>
                    { reviews_list && Array.isArray(reviews_list) && reviews_list.length > 0 &&
                        reviews_list.map( review => (
                            <SingleReview 
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
