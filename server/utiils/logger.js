import winston from 'winston';
import 'winston-daily-rotate-file';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the log directory relative to this file's location
const logDirectory = path.join(__dirname, '../../logs'); // Store logs in project root/logs

// Ensure the logs directory exists (optional, winston-daily-rotate-file might create it)
// import fs from 'fs';
// if (!fs.existsSync(logDirectory)) {
//   fs.mkdirSync(logDirectory);
// }

// Define custom log format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }), // Log stack traces
  winston.format.splat(),
  winston.format.json() // Log in JSON format
);

// Create a daily rotating file transport
const fileTransport = new winston.transports.DailyRotateFile({
  filename: path.join(logDirectory, 'application-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true, // Compress rotated files
  maxSize: '20m',     // Max size of a log file before rotation (e.g., 20MB)
  maxFiles: '7d',     // Keep logs for 7 days
  format: logFormat
});

// Create a console transport
const consoleTransport = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple() // Simple format for console readability
  )
});

// Create the logger instance
const logger = winston.createLogger({
  level: 'info', // Log only messages with level 'info' and above ('warn', 'error')
  format: logFormat,
  transports: [
    fileTransport, // Add file transport
  ],
  exitOnError: false // Do not exit on handled exceptions
});

// If not in production, log to the console as well
if (process.env.NODE_ENV !== 'production') {
  logger.add(consoleTransport);
}

export default logger; 