import dotenv from 'dotenv';
dotenv.config();

export const Config = {
    baseURL: process.env.PARABANK_URL,
    username: process.env.PARABANK_USERNAME,
    password: process.env.PARABANK_PASSWORD 
};