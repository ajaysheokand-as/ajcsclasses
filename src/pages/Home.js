import React from 'react'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Services } from '../components/Services'
import { Meetings } from '../components/Meetings'
import { Apply } from '../components/Apply'
import { Course } from '../components/Course'
import { Facts } from '../components/Facts'
import { Contact } from '../components/Contact'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        {/* <Services/> */}
        {/* <Meetings/> */}
        <Apply/>
        <Course/>
        <Facts/>
        <Contact/>
    </div>
  )
}
