import React from 'react'
import BlocSection from '../BlocSection/BlocSection'
import styles from './BlocSectionManager.module.scss'
import { v4 as uuidv4 } from 'uuid';

export default function BlocSectionManager({content, gsap}) {
  return (
    <>
      { content && Array.isArray(content) && content.length > 0 &&
        <>
        {content.map(bloc => {
            return <BlocSection gsap={gsap} key={uuidv4()} data={bloc} />
        })}
        </>
    }
    </>
  )
}
