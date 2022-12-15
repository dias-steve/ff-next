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
export default function BlocSection({data, gsap}) {

  switch (data.bloc_type) {
    case 'hero':
        return <HeroHomeSection content={data} gsap={gsap}/>

    case 'speech':
      return <HomeSpeechSection content={data} gsap={gsap}/>

    case 'paragraph-2':
      return<HomeConclusionParagraph content={data} gsap={gsap} />

    case 'paragraph-1':
      return<HomeParagraph1Section content={data} gsap={gsap} />
    
    case 'review':
      return <HomeReviewSection content={data} gsap={gsap} />

    case 'path':
      return <HomePathSection content={data} gsap={gsap} />
    default:
      return <p> components type not found </p>
  }

}
