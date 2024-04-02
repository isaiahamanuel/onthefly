import { pool } from "../config/database.js";

const createActivity = async (req, res) => {
  try {
    const { trip_id, activity, num_votes } = req.body;
    const results = await pool.query(
      `INSERT INTO activities (trip_id, activity, num_votes)
      VALUES($1, $2, $3)
      RETURNING *`,
      [trip_id, activity, num_votes]
    );

    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getActivities = async (req, res) => {
  try {
    const results = await pool.query(
      `SELECT * FROM activities ORDER BY id ASC`
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
const getActivity = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query("SELECT * FROM activities WHERE id = $1", [
      id,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
    console.log("Unable to get trip");
    console.log("Error:", error.message);
  }
};
const updateActivity = async (request, response) => {
  try {
    const { trip_id, activity, num_votes } = req.body;
    const id = parseInt(req.params.id);

    const results = await pool.query(
      `UPDATE trips
      SET activity = $1, num_votes = $2
      WHERE id = $3`,
      [activity, num_votes, id]
    );

    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
const deleteActivity = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const results = await pool.query("DELETE FROM activities WHERE id = $1", [
      id,
    ]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  createActivity,
  getActivities,
  getActivity,
  updateActivity,
  deleteActivity,
};
