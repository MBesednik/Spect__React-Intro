import React from 'react';
import { Button } from '../../lib/style/generalStyles';
import { useHistory } from 'react-router';

import {
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description
} from './EventStyle'

const Event = ({
    image,
    title,
    description,
    imgAlt,
    buttonText,
    eventId
}) => {
    const history = useHistory();
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt= {imgAlt} />
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button
            onClick={() => history.push(`/event/${eventId}`)}
            text={buttonText}
      />
        </EventWrapper>
    );
}

export default Event;