import React from 'react';
import HeroHomeSection from '../BlocSectionManager/HeroHomeSection/HeroHomeSection';
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
      return <div> speech </div>

    case 'paragraph-2':
      return 

    case 'paragraph-1':
      return 
    
    case 'review':
      return 

    case 'path':
      return 
    default:
      return <p> components type not found </p>
  }

}
