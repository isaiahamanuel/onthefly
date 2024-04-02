import express from "express";
import cors from "cors";
import tripRoutes from "./routes/trips.js";
import activitiesRoutes from "./routes/activities.js";
import destinationsRoutes from "./routes/destinations.js";
import tripDestinationsRoutes from "./routes/trip_destinations.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">✈️ OnTheFly API</h1>'
    );
});

app.use("/trips", tripRoutes);
app.use("/activities", activitiesRoutes);
app.use("/destinations", destinationsRoutes);
app.use("/trip_destinations", tripDestinationsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
