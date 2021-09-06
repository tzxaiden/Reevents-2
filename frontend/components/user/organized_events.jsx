import React from 'react';

import EventIndexItem from '../event/event_index_item';
import UpcomingEventItem from './upcoming_event_item';

const OrganizedEvents = ({ organizedEvents }) => {
  // console.log("organizedEvents: ", organizedEvents);

  if (organizedEvents.length === 0) {
    return (
      <div className="no-saved-events-container" id="bookmarkedEvents-container">
        <img id="no-organized-events-img" src="data:image/png;base64,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" alt="no saved events" />

        <div className="text-container">
          <p className="no-saved-events-text">
            You do not have any organized events. Hosted events will show up here so you can easily view them here later.
          </p>
        </div>
      </div>
    )
  } else {
    let organizedEvent = organizedEvents.map(event => (
      <UpcomingEventItem eventItem={ event } key={ event.id } />
    ))

    return (
      <ul className="organized-event-container">
        { organizedEvent }
      </ul>
    );
  }
}

export default OrganizedEvents;