import './Events.scss';
import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import SingleEvent from '../SingleEvent/SingleEvent';

import { Route } from 'react-router-dom';


const Events = () => {
    return ( 
      <>
      <h1 className="Section-Title">Events</h1>
        <section className="Section-Events">
          <Route path="/SingleEvent" component={SingleEvent}>
            <EventCard
                      title="UX/UI design workshop"
                      location="Hodnik FOI-a"
                      time="14.10. (9:00-16:00h)"
                      freeSpace="15/60"
                      firm="Speck"
                    />
                     </Route>
            <EventCard
                   title="UX/UI design workshop"
                   location="Hodnik FOI-a"
                   time="14.10. (9:00-16:00h)"
                   freeSpace="15/60"
                   firm="Speck"
                    />
            <EventCard
                    title="UX/UI design workshop"
                    location="Hodnik FOI-a"
                    time="14.10. (9:00-16:00h)"
                    freeSpace="15/60"
                    firm="Speck"
                    />
            <EventCard
                     title="UX/UI design workshop"
                     location="Hodnik FOI-a"
                     time="14.10. (9:00-16:00h)"
                     freeSpace="15/60"
                     firm="Speck"
                    />
            <EventCard
                    title="UX/UI design workshop"
                    location="Hodnik FOI-a"
                    time="14.10. (9:00-16:00h)"
                    freeSpace="15/60"
                    firm="Speck"
                    />
            <EventCard
                      title="UX/UI design workshop"
                      location="Hodnik FOI-a"
                      time="14.10. (9:00-16:00h)"
                      freeSpace="15/60"
                      firm="Speck"
                    />
            <EventCard
                    title="UX/UI design workshop"
                    location="Hodnik FOI-a"
                    time="14.10. (9:00-16:00h)"
                    freeSpace="15/60"
                    firm="Speck"
                    />
            <EventCard
                     title="UX/UI design workshop"
                     location="Hodnik FOI-a"
                     time="14.10. (9:00-16:00h)"
                     freeSpace="15/60"
                     firm="Speck"
                    />
            <EventCard
                     title="UX/UI design workshop"
                     location="Hodnik FOI-a"
                     time="14.10. (9:00-16:00h)"
                     freeSpace="15/60"
                     firm="Speck"
                    />
       </section>
       </>
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








