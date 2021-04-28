import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import { ButtonStyle } from '../../lib/style/generalStyles';
import {
    Section,
    Title,
    SectionEvents,
    Event,
    EventInfo,
    Figure,
    Image,
    Content,
    ContentRow,
    Item,
    ItemTitle,
    ItemValue,
    Description
} from './SingleEventStyle';

const SingleEvent = (props) => {
    // const routeEventId = parseInt(props.match.params.id);
    // const [events, setEvents] = useState(null);
    // const [event, setEvent] = useState(null);

    // useEffect(() => {
    //     setEvents(eventsMock);
    // }, []);
    // useEffect(() => {
    //     events && setEvent(...events.filter(event => event.id === routeEventId));
    // }, [events]);

    return ( 
        <>
            <Section>
                <Title>UX/UI design workshop</Title>
            </Section>
            <Event>
                <EventInfo>
                    <Figure>
                        <Image src={require("../../assets/images/design.jpg").default} alt="Design" className="EventInfo-Image" />
                    </Figure>
                    <Content>
                        <ContentRow>
                            <Item>
                                <ItemTitle>Lokacija</ItemTitle>
                                <ItemValue>Hodnik FOI-a</ItemValue>
                            </Item>
                            <Item>
                                <ItemTitle>Datum i vrijeme</ItemTitle>
                                <ItemValue>14.10. (9:00-16:00h)</ItemValue>
                            </Item>
                        </ContentRow>
                        <ContentRow>
                            <Item>
                                <ItemTitle>Slobodna mjesta</ItemTitle>
                                <ItemValue>15/60</ItemValue>
                            </Item>
                            <Item>
                                <ItemTitle>Firma</ItemTitle>
                                <ItemValue>Speck</ItemValue>
                            </Item>
                        </ContentRow>
                        <ButtonStyle>Prijavi se</ButtonStyle>
                    </Content>
                </EventInfo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint laborum quibusdam quisquam, fugiat
                    cumque dignissimos quasi. Corrupti dignissimos commodi ad sint aliquam. Ipsum doloremque, eum commodi
                    dolor voluptatibus blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                    reiciendis error animi quae dolorum officiis suscipit iusto quos facere temporibus libero a, labore
                    nihil ipsa necessitatibus debitis quibusdam? Optio, dolor?
                </Description>
            </Event>
        </>
     );
}
 
export default SingleEvent;