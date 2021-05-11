import React, { useState, useEffect} from 'react';

// components
import EventCard from '../../components/EventCard/EventCard';
import Loader from "react-loader-spinner";
import SearchBar from '../../components/SearchBar/SearchBar';
import Section from '../../components/Section/Section';

// file's from lib
import { Grid } from '../../lib/style/generalStyles';
import eventsMock from '../../lib/mock/events';


const Events = () => {

    const style = { 
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
    const [events, setEvents] = useState(null);
    const [filtered, setFiltered] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
            setFiltered(eventsMock);
        }, 1000);
    }, []);

    const handleSearch = value => {
        const filteredResult = filtered.filter(event =>
          event.title.toLowerCase().includes(value.toLowerCase())
        );
        setEvents(filteredResult);
      };
    return ( 
        <>
        <Section title='Events' withoutTopPadding>
          <SearchBar
            placeholder='Search event by title...'
            disabled={events ? false : true}
            onValueChange={handleSearch}
          />
          {events ? (
            <Grid columns={4}>
              {events &&
                events.map(event => {
                  return (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      location={event.location}
                      time={event.dateTime}
                      freeSpots={event.availablity}
                      firm={event.company}
                      eventId={event.id}
                    />
                  );
                })}
            </Grid>
          ) : (
                <Loader style = {style}
          type="TailSpin"
          color="#e4b43c"
          height={150}
          width={150}
          timeout={1500}
          />
          )}
        </Section>
      </>
    );
  };
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








