import express from "express";
import TripDestinationsController from "../controllers/trip_destinations.js";

const router = express.Router();

router.get("/", TripDestinationsController.getTripDestinations);
router.get("/trips/:trip_id", TripDestinationsController.getAllDestinations);
router.get("/trips/:destination_id", TripDestinationsController.getAllTrips);
router.post("/", TripDestinationsController.createTripDestination);

export default router;
