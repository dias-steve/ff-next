import React from 'react';
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
        return <p> hero </p>

    case 'speech':
      return <p> speech </p>

    case 'paragraph-2':
      return <p> paragraph-2 </p>

    case 'paragraph-1':
      return <p> paragraph-1 </p>
    
    case 'review':
      return <p> review </p>

    case 'path':
      return <p> path </p>
    default:
      return <p> components type not found </p>
  }

}
