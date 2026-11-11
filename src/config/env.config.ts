import dotenv from "dotenv";

// Pick the environment file: ENV=qa (default), ENV=stg or ENV=prod
const envName = process.env.ENV || "qa";
dotenv.config({ path: `.env.${envName}`, quiet: true });

export const EnvConfig = {
  envName: envName,
  baseUrl: process.env.BASE_URL || "https://www.saucedemo.com",
};
