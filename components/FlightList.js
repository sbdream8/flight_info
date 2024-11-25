export default function FlightList({ flights }) {
    return (
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <h3>{flight.flightNumber}</h3>
            <p>{flight.departure} to {flight.arrival}</p>
            <p>
              Departure: {new Date(flight.departureTime).toLocaleString()} <br />
              Arrival: {new Date(flight.arrivalTime).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    );
  }
  