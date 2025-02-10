import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from "dotenv";
import chatRoutes from './routes/chatRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use(chatRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
