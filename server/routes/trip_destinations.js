import express from "express";
import TripDestinationsController from "../controllers/trip_destinations.js";

const router = express.Router();

router.get("/", TripDestinationsController.getTripDestinations);
router.get(
  "/destinations/:trip_id",
  TripDestinationsController.getAllDestinations
);
router.post("/", TripDestinationsController.createTripDestination);

export default router;
