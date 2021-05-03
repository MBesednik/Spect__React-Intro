import React from 'react';

// components
import { Button } from '../../lib/style/generalStyles';

// style
import { 
  ContentRow,
  Item, 
  ItemTitle, 
  ItemValue 
  } from './SingleEventInfoStyle';

const EventInfo = ({
  location,
  time,
  freeSpots,
  firm
     }) => {
  return (
    <>
      <ContentRow>
        <Item>
          <ItemTitle>Lokacija</ItemTitle>
          <ItemValue>{location}</ItemValue>
        </Item>
        <Item>
          <ItemTitle>Datum i vrijeme</ItemTitle>
          <ItemValue>{time}</ItemValue>
        </Item>
      </ContentRow>
      <ContentRow>
        <Item>
          <ItemTitle>Slobodna mjesta</ItemTitle>
          <ItemValue>{freeSpots}</ItemValue>
        </Item>
        <Item>
          <ItemTitle>Firma</ItemTitle>
          <ItemValue>{firm}</ItemValue>
        </Item>
      </ContentRow>
      <Button text='Prijavi se' />
    </>
  );
};

export default EventInfo;
