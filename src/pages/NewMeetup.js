import { useNavigate  } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetup";

function NewMeetupPage() {
 const navigate = useNavigate ();
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-starter-app-3450b-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST' , 
        body:  JSON.stringify(meetupData),
        headers : {
          'Content-Type' : 'application/json'
        }
      }
    ).then(() => {
      navigate('/');
    });
  }
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
