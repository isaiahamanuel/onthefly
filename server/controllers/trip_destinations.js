import { pool } from "../config/database.js";

const createTripDestination = async (req, res) => {
  try {
    const { trip_id, destination_id } = req.body;
    const results = await pool.query(
      `INSERT INTO trips_destinations (trip_id, destination_id)
      VALUES($1, $2)
      RETURNING *`,
      [trip_id, destination_id]
    );

    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getTripDestinations = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT * FROM trips_destinations ORDER BY destination_id ASC`
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
const getAllActivities = async (req, res) => {
  try {
    const trip_id = parseInt(req.params.trip_id);
    const results = await pool.query(
      "SELECT * FROM trips_destinations WHERE trip_id=$1",
      [trip_id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
    console.log("Unable to get trip destination.");
    console.log("Error:", error.message);
  }
};
const getAllDestinations = async (req, res) => {
  try {
    const trip_id = parseInt(req.params.trip_id);
    const results = await pool.query(
      "SELECT * FROM trips_destinations WHERE trip_id=$1",
      [trip_id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
    console.log("Unable to get trip destination.");
    console.log("Error:", error.message);
  }
};

export default {
  createTripDestination,
  getTripDestinations,
  getAllActivities,
  getAllDestinations,
};
