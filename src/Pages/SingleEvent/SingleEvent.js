import './SingleEvent.scss';
import React from 'react';
import { Route } from 'react-router-dom';

import ImageDevelopment from '../../assets/Images/development.jpg'


const SingleEvent = () => {
    return ( 
        <>
        <Route path="/event">
            <section className="Section SectionEvents">
                <h1 className="Section-Title">Event page title</h1>
            </section>
            <section className="SectionEvent">
                <div className="EventInfo">
                    <figure className="EventInfo-Figure">
                        {ImageDevelopment}
                    </figure>
                    <div className="EventInfo-Content">
                        <div className="EventInfo-ContentRow">
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitleTitle">Lokacija</h3>
                                <p className="EventInfo-ItemTitleValue">Hodnik FOI-a</p>
                            </div>
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitle">Lokacija</h3>
                                <p className="EventInfo-ItemTitleValue">Hodnik FOI-a</p>
                            </div>
                        </div>
                        <div className="EventInfo-ContentRow">
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitle">Lokacija</h3>
                                <p className="EventInfo-ItemTitleValue">Hodnik FOI-a</p>
                            </div>
                            <div className="EventInfo-ItemTitle">
                                <h3 className="EventInfo-ItemTitle">Lokacija</h3>
                                <p className="EventInfo-ItemTitleValue">Hodnik FOI-a</p>
                            </div>
                        </div>
                        <button className="Button">Prijavi se</button>
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
          </Route>
        </>
     );
}
 
export default SingleEvent;