import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
});

export default mongoose.models.Flight || mongoose.model("Flight", FlightSchema);
