import React from 'react';
import HeroHomeSection from '../BlocSectionManager/HeroHomeSection/HeroHomeSection';
import HomeConclusionParagraph from '../BlocSectionManager/HomeConclusionParagraph/HomeConclusionParagraph';
import HomeParagraph1Section from '../BlocSectionManager/HomeParagraph1Section/HomeParagraph1Section';
import HomePathSection from '../BlocSectionManager/HomePathSection/HomePathSection';
import HomeReviewSection from '../BlocSectionManager/HomeReviewSection/HomeReviewSection';
import HomeSpeechSection from '../BlocSectionManager/HomeSpeech/HomeSpeechSection';
import styles from './BlocSection.module.scss';

// hero : Hero
// speech : Discours
// paragraph-1 : Paragraphe
// review : Avis client
// paragraph-2 : Paragraphe de conculsion
// path : Parcours
export default function BlocSection({data}) {

  switch (data.bloc_type) {
    case 'hero':
        return <HeroHomeSection content={data}/>

    case 'speech':
      return <HomeSpeechSection content={data}/>

    case 'paragraph-2':
      return <HomeConclusionParagraph content={data} />

    case 'paragraph-1':
      return <HomeParagraph1Section content={data} />
    
    case 'review':
      return <HomeReviewSection content={data} />

    case 'path':
      return <HomePathSection content={data} />
    default:
      return <p> components type not found </p>
  }

}
