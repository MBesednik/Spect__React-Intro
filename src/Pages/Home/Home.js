import React, { useState, useEffect} from 'react';
import eventsMock from '../../lib/mock/events';
import {} from './HomeStyle';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import Event from '../../components/Event/Event';
import Loader from "react-loader-spinner";



const Home = () => {

      const style = {textAlign: 'center'};
      const [events, setEvents] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
        }, 1500);
    }, [events]);

    return (
        <>
         <Hero/>
      
        <Section title="Featured events">
 
          {events ? ( 

          <Grid columns={3}>
          {events.map(event => event.isFeatured &&
            <Event 
                        key={event.id}
                        image={event.imageUrl}
                        title={event.title}
                        description={event.shortDescription}
                        imgAlt={event.imageAlt}
                        buttonText="Find out more"
                        eventId={event.id}
                        route={`/event/${event.id}`}
                    />
                    )
                }
            </Grid>
          ) : (
         <Loader style={style}
          type="TailSpin"
          color="#e4b43c"
          height={150}
          width={150}
          timeout={1000}
          />
          )}
        </Section>
        </>
      );
}
 
export default Home;