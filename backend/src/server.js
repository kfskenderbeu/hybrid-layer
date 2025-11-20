import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { loadConfig } from "./config/index.js";
import { logger } from "./utils/logger.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import apiRoutes from "./api/routes.js";

const app = express();
const config = loadConfig();

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 200,
});
app.use(limiter);

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use("/api", apiRoutes);

app.use(errorHandler);

app.listen(config.PORT, () => {
  logger.info(`Backend running on port ${config.PORT}`);
});

