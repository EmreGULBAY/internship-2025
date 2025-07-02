
import dotenv from 'dotenv';

dotenv.config();

export const env = {
    secretKey: process.env.SECRET_KEY ?? "test"
}