import React from 'react';
import UpcomingEventItem from './upcoming_event_item';

const UpcomingEvents = ({ ticketedEvents }) => {
    // console.log("ticketedEvents: ", ticketedEvents);

  if (ticketedEvents.length === 0) {
    return (
      <div className="no-saved-events-container" id="bookmarkedEvents-container">
        <img id="no-saved-events-img"  src="https://static.vecteezy.com/system/resources/thumbnails/000/357/052/small/Education__2813_29.jpg" alt="no saved events" />

        <div className="text-container">
          <p className="no-saved-events-text">You do not have any upcoming events.</p>
        </div>
      </div>
    )
  } else {
    return (
      <ul className="ticketed-event-container">
        { ticketedEvents.map(event => (
          <UpcomingEventItem eventItem={event} key={event.id} />
        ))
      }
    </ul>
    )
  }
}

export default UpcomingEvents;
