import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';

// style
import {
  SectionEvent,
  Title,
  EventInfoWrapper,
  Figure,
  Image,
  Content,
  Description,
} from '../../components/SingleEventInfo/SingleEventInfoStyle';

// components
import SingleEventInfo from '../../components/SingleEventInfo/SingleEventInfo';

const Event = props => {
  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events, routeEventId]);

  return (
    <>
      {event && (
        <>
          <SectionEvent>
            <Title>{event && event.title}</Title>
            <EventInfoWrapper>
              <Figure>
                <Image src={event.imageUrl} alt={event.imageAlt} />
              </Figure>
              <Content>
                <SingleEventInfo
                  location={event.location}
                  time={event.dateTime}
                  freeSpots={event.availability}
                  firm={event.company}
                  hasButton={true}
                  route='/event'
                  buttonText='Prijavi se'
                />
              </Content>
            </EventInfoWrapper>
            <Description>{event.description}</Description>
          </SectionEvent>
        </>
      )}
    </>
  );
};

export default Event;
