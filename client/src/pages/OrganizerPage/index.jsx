import React, { useState, useEffect } from "react";
import "./style.css";
import { Footer } from "../../components/Footer";
import { Organizers } from "../../components/Organizers";

function OrganizerPage() {
  const [organizerlist, setOrganizer] = useState(null);

  useEffect(() => {
    async function OrganizerData() {
      const organise = await fetch(`http://localhost:3002/organizer`);
      if (!organise.ok) {
        const message = `An error occurred: ${organise.statusText}`;
        console.error(message);
        return;
      }
      const allorganise = await organise.json();
      setOrganizer(allorganise);
    }

    OrganizerData();

    return;
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-items">
          <div className="organizer-items">
            <h2>Organizers</h2>
            <div className="events">
              {organizerlist &&
                organizerlist.map((Organizer) => (
                  <Organizers key={Organizer._id} organizer={Organizer} />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default OrganizerPage;
