import React from 'react';
import Button from '../../lib/style/generalStyles';
import {
    EventCard as EventCardStyle,
    Title,
    Content,
    ContentRow,
    Item,
    ItemTitle,
    ItemValue
} from './EventCardStyle';

const EventCard = ({
    
    title,
    location,
    time,
    freeSpace,
    firm

}) => {
    return (  
        <>
          <EventCardStyle>
            <Title>{title}</Title>
            <Content>
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
                        <ItemValue>{freeSpace}</ItemValue>
                    </Item>
                    <Item>
                        <ItemTitle>Firma</ItemTitle>
                        <ItemValue>{firm}</ItemValue>
                    </Item>
                </ContentRow>
            </Content>
            <Button/>
        </EventCardStyle>
        </>
    );
}
 
export default EventCard;