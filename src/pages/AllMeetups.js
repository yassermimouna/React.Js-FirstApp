import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-starter-app-3450b-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const meetups = [];
        for(const key in data){
          const meetup = {
            id : key ,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetUpsPage;
