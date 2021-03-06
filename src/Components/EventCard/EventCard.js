import './EventCard.scss';
import React from 'react';
import Button from '../Button/Button';

const EventCard = ({
    
    title,
    location,
    time,
    freeSpace,
    firm

}) => {
    return (  
        <>
          <div className="EventCard">
            <h2 className="EventCard-Title">{title}</h2>
            <div className="EventCard-Content">
                <div className="EventCard-ContentRow">
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Lokacija</h3>
                        <p className="EventCard-ItemValue">{location}</p>
                    </div>
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
                        <p className="EventCard-ItemValue">{time}</p>
                    </div>
                </div>
                <div className="EventCard-ContentRow">
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
                        <p className="EventCard-ItemValue">{freeSpace}</p>
                    </div>
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Firma</h3>
                        <p className="EventCard-ItemValue">{firm}</p>
                    </div>
                </div>
            </div>
            {/* <Link to="/SingleEvent">
            <Button text="Find out more"></Button>
            </Link> */}
            <Button/>
        </div>
        </>
    );
}
 
export default EventCard;