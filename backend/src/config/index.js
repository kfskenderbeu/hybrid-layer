import dotenv from "dotenv";
dotenv.config();

export const loadConfig = () => {
  return {
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET || "dev-secret",
    REDIS_HOST: process.env.REDIS_HOST || "redis",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    CDN_KEY: process.env.CDN_KEY || "cdn-key",
  };
};
