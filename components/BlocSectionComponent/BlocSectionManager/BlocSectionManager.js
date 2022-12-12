import React from 'react'
import BlocSection from '../BlocSection/BlocSection'
import styles from './BlocSectionManager.module.scss'


export default function BlocSectionManager({content}) {
  return (
    <>{ content && Array.isArray(content) && content.length > 0 &&
        <>
        {content.map(bloc => {
            return <BlocSection data={bloc}/>
        })}
        </>
    }
    </>
  )
}
