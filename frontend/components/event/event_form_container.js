import { connect } from 'react-redux';
import { createEvent, deleteEvent, clearEventErrors, requestEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = ({ event }) => ({
  event, // equivalent to event: event
  eventErrors: event.errors,
});

const mapDispatchToProps = (dispatch, { match }) => ({
  createEvent: event => dispatch(createEvent(event)),
  deleteEvent: event => dispatch(deleteEvent(event)),
  requestEvent: id => dispatch(requestEvent(id)),
  clearEventErrors: () => dispatch(clearEventErrors()),
  // match: match,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
