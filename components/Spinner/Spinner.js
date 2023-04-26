import React from 'react'
import styles from './Spinner.module.scss'
function Spinner({blackCircle}) {
  return (
    <div className={styles.wrapper_spinner}>
        <div className={[styles.spin, blackCircle ? styles.spin_black : styles.spin_white].join(" ")}></div>
    </div>
  )
}

export default Spinner
