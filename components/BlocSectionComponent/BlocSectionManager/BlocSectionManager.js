import React from 'react'
import BlocSection from '../BlocSection/BlocSection'
import styles from './BlocSectionManager.module.scss'
import { v4 as uuidv4 } from 'uuid';

export default function BlocSectionManager({content}) {
  return (
    <>{ content && Array.isArray(content) && content.length > 0 &&
        <>
        {content.map(bloc => {
            return <div key={uuidv4()}> <BlocSection data={bloc} /></div>
        })}
        </>
    }
    </>
  )
}
