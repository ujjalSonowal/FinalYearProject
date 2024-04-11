import React from "react";

export function Bookings({ booking }) {
  return (
    <div>
      <p>Booking Day: {booking.bookingDay}</p>
      {/* pay now option at the last */}
    </div>
  );
}
