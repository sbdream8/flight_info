import { useState } from "react";
import FlightSearchForm from "../components/FlightSearchForm";
import FlightList from "../components/FlightList";

export default function Home() {
  const [flights, setFlights] = useState([]);

  const handleSearch = async ({ departure, arrival }) => {
    const res = await fetch("/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            flights {
              id
              flightNumber
              departure
              arrival
              departureTime
              arrivalTime
            }
          }
        `,
      }),
    });
    const { data } = await res.json();
    setFlights(data.flights);
  };

  return (
    <div>
      <FlightSearchForm onSearch={handleSearch} />
      <FlightList flights={flights} />
    </div>
  );
}
