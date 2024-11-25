import Flight from "../models/Flight";

const resolvers = {
  Query: {
    flights: async () => await Flight.find(),
    flight: async (_, { id }) => await Flight.findById(id),
  },
  Mutation: {
    addFlight: async (_, { flightNumber, departure, arrival, departureTime, arrivalTime }) => {
      const flight = new Flight({ flightNumber, departure, arrival, departureTime, arrivalTime });
      return await flight.save();
    },
  },
};

export default resolvers;
