import React from 'react'
import Card from '../../Utilities/Card'
import Notify from './Notify'



function NotificationSettings(props) {
  return (
    <section className={`text-black flex flex-col mb-16 gap-20 ${props.className}`}>

        {/* Today */}
         <Notify  relativeTime="today" railwayTime="18:00" notification="Special Offer , buy sneaker @99"/>


        {/* Yesterday */}
        <Notify  relativeTime="yesterday" railwayTime="10:23" notification="Refund alert"/>
         
        {/* Other Dates */}
        <Notify  relativeTime="monday - 19/4/23" railwayTime="02:30" notification="Refund alert"/>

        

    </section>
  )
}

export default NotificationSettings