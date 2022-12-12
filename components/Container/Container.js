import React from 'react'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'

export default function container(props) {
  return (
   <>
     <Header/>
        {props.children}
    <Footer/>
   </>
  )
}
