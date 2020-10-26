import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import SetupRoutes from "./routes/setup.routes";
import CompaignRoutes from "./routes/compaigns.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use("/api", bodyParser.json({ limit: "50mb" }));
app.use("/api", bodyParser.urlencoded({ extended: true, parameterLimit: 50000 }));
app.use("/api/compaigns", CompaignRoutes);
app.use("/setup", SetupRoutes);
app.listen(process.env.NODE_PORT, () => {
  console.log(`Server running on port ${process.env.NODE_PORT}.`);
});
