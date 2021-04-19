import './Events.scss';
import React from 'react';
import EventCard from '../../Components/EventCard/EventCard'

const Events = () => {
    return ( 
        <section class="Section-Events">
            <EventCard
                      title="UX/UI design workshop"
                      location="Hodnik FOI-a"
                      time="14.10. (9:00-16:00h)"
                      freeSpace="15/60"
                      firm="Speck"
                    />
            <EventCard
                      title="Frontend best practices"
                      location="Hodnik FOI-a"
                      time="15.10. (9:00-16:00h)"
                      freeSpace="55/60"
                      firm="Speck"
                    />
            <EventCard
                      title="Digital marketing workshop"
                      location="Hodnik FOI-a"
                      time="16.10. (9:00-16:00h)"
                      freeSpace="28/60"
                      firm="Speck"
                    />
            <EventCard
                      title="Frontend best practices"
                      location="Hodnik FOI-a"
                      time="17.10. (9:00-16:00h)"
                      freeSpace="50/60"
                      firm="Speck"
                    />
            <EventCard
                      title="Digital marketing workshop"
                      location="Hodnik FOI-a"
                      time="18.10. (9:00-16:00h)"
                      freeSpace="20/60"
                      firm="Speck"
                    />
            <EventCard
                      title="UX/UI design workshop"
                      location="Hodnik FOI-a"
                      time="19.10. (9:00-16:00h)"
                      freeSpace="28/60"
                      firm="Speck"
                    />
            <EventCard
                      title="Frontend best practices"
                      location="Hodnik FOI-a"
                      time="20.10. (9:00-16:00h)"
                      freeSpace="52/60"
                      firm="Speck"
                    />
            <EventCard
                      title="UX/UI design workshop"
                      location="Hodnik FOI-a"
                      time="21.10. (9:00-16:00h)"
                      freeSpace="38/60"
                      firm="Speck"
                    />
       </section>
     );
}

export default Events;

// const Events = () => {
//     return ( 
//         <div className="EventCard">
//             <h2 className="EventCard-Title">UX/UI design workshop</h2>
//             <div className="EventCard-Content">
//                 <div className="EventCard-ContentRow">
//                     <div className="EventCard-Item">
//                         <h3 className="EventCard-ItemTitle">Lokacija</h3>
//                         <p className="EventCard-ItemValue">Hodnik FOI-a</p>
//                     </div>
//                     <div className="EventCard-Item">
//                         <h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
//                         <p className="EventCard-ItemValue">14.10. (9:00-16:00h</p>
//                     </div>
//                 </div>
//                 <div className="EventCard-ContentRow">
//                     <div className="EventCard-Item">
//                         <h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
//                         <p className="EventCard-ItemValue">15/60</p>
//                     </div>
//                     <div className="EventCard-Item">
//                         <h3 className="EventCard-ItemTitle">Firma</h3>
//                         <p className="EventCard-ItemValue">Speck</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Events;








