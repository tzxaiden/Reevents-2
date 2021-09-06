// Libs
import React, { Component } from 'react';

// Components
import EventIndexItem from '../event/event_index_item';

const BookmarkedEvents = ({ bookmarkedEvents }) => {
  // console.log("bookmarkedEvents: ", bookmarkedEvents);

  if (bookmarkedEvents.length === 0) {
    return (
      <div className="no-saved-events-container" id="bookmarkedEvents-container">
        <img id="no-saved-events-img" src="https://img.icons8.com/carbon-copy/2x/save.png" alt="no saved events" />
        <div className="text-container">
        <p className="no-saved-events-text">You do not have any liked events. Saved events will show up here so you can easily view them here later.</p>
        </div>
      </div>
    )
  }
  else {
    let bookmarkedEvent = bookmarkedEvents.map(event => (
      <EventIndexItem eventItem={event} key={event.id} />
    ));

    return (
      <div className="event-index-container" id="bookmarkedEvents-container">
        { bookmarkedEvent }
      </div>
    );
  }
};

export default BookmarkedEvents;
