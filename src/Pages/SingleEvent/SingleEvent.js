import React, { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import './SingleEvent.scss';
import { ButtonStyle } from '../../lib/style/generalStyles'

const SingleEvent = (props) => {
    const routeEventId = parseInt(props.match.params.id);
    const [events, setEvents] = useState(null);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        setEvents(eventsMock);
    }, []);
    useEffect(() => {
        events && setEvent(...events.filter(event => event.id === routeEventId));
    }, [events]);

    return ( 
        <>
            <section className="Section SectionEvents">
                <h1 className="Section-Title">UX/UI design workshop</h1>
            </section>
            <section className="SectionEvent">
                <div className="EventInfo">
                    <figure className="EventInfo-Figure">
                        <img src={require("../../assets/images/design.jpg").default} alt="Design" className="EventInfo-Image"/>
                    </figure>
                    <div className="EventInfo-Content">
                        <div className="EventInfo-ContentRow">
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitleTitle">Lokacija</h3>
                                <p className="EventInfo-ItemTitleValue">Hodnik FOI-a</p>
                            </div>
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitle">Datum i vrijeme</h3>
                                <p className="EventInfo-ItemTitleValue">14.10. (9:00-16:00h)</p>
                            </div>
                        </div>
                        <div className="EventInfo-ContentRow">
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitle">Slobodna mjesta</h3>
                                <p className="EventInfo-ItemTitleValue">15/60</p>
                            </div>
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitle">Firma</h3>
                                <p className="EventInfo-ItemTitleValue">Speck</p>
                            </div>
                        </div>
                        <ButtonStyle>Prijavi se</ButtonStyle>
                    </div>
                </div>
                <p className="EventInfo-Description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint laborum quibusdam quisquam, fugiat
                    cumque dignissimos quasi. Corrupti dignissimos commodi ad sint aliquam. Ipsum doloremque, eum commodi
                    dolor voluptatibus blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                    reiciendis error animi quae dolorum officiis suscipit iusto quos facere temporibus libero a, labore
                    nihil ipsa necessitatibus debitis quibusdam? Optio, dolor?
                </p>
            </section>
        </>
     );
}
 
export default SingleEvent;