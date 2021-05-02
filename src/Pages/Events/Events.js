import React, { useState, useEffect} from 'react';
import eventsMock from '../../lib/mock/events';
import EventCard from '../../components/EventCard/EventCard';
import SingleEvent from '../SingleEvent/SingleEvent';
import { Route } from 'react-router-dom';
import {
        SectionTitle,
        SectionEvents
} from './EventsStyle';
import Loader from "react-loader-spinner";



const Events = () => {

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    const [events, setEvents] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
        }, 1500);
    }, [events]);
    return ( 
      <>
      <SectionTitle>Events</SectionTitle>
        <SectionEvents >
        <Loader style = {style}
          type="TailSpin"
          color="#e4b43c"
          height={150}
          width={150}
          timeout={1500}
          />
             {events && 
             <>
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
                    </> 
                    }
       </SectionEvents>
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








