import React from 'react'
import styles from './LoaderPage.module.scss';
import Spinner from '../Spinner/Spinner';
function LoaderPage() {
  return (
    <div className={styles['Loader']}>
        <div className={styles['Loader__sipnner-wrapper']}>
            <Spinner blackCircle={false}/>
        </div>
    </div>
  )
}

export default LoaderPage
