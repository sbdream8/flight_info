export default function FlightSearchForm({ onSearch }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const searchParams = {
        departure: formData.get("departure"),
        arrival: formData.get("arrival"),
      };
      onSearch(searchParams);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input name="departure" placeholder="Departure City" required />
        <input name="arrival" placeholder="Arrival City" required />
        <button type="submit">Search</button>
      </form>
    );
  }
  