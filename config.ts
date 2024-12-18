import dotenv from 'dotenv';
const result = dotenv.config({ path: './.env' });

if (result.error) {
  console.error('Error loading .env file:', result.error);
} else {
  console.log('Parsed .env:', result.parsed);
}

export const PORT=process.env.PORT
export const ENVIRONMENT = process.env.NODE_ENV
