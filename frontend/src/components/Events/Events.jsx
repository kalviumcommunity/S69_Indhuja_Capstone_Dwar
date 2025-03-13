import React from "react";

const Events = () => {
  const events = [
    { id: 1, name: "Blood Donation Camp", date: "March 20, 2025" },
    { id: 2, name: "Food Drive", date: "April 5, 2025" },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <ul className="bg-white p-4 shadow-md rounded-lg">
        {events.map((event) => (
          <li key={event.id} className="p-2 border-b last:border-b-0">
            <span className="font-bold">{event.name}</span> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
