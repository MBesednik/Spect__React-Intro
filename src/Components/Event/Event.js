import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import Button from '../../lib/style/generalStyles';
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
    route
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt= {imgAlt} />
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button text={buttonText} route={route}/>
        </EventWrapper>
    );
}

export default Event;